#!/bin/sh

set -e

# Trust custom certificates if the folder exists
if [ -d /opt/custom-certificates ]; then
  echo "🔐 Trusting custom certificates from /opt/custom-certificates."
  export NODE_OPTIONS="--use-openssl-ca $NODE_OPTIONS"
  export SSL_CERT_DIR=/opt/custom-certificates
  c_rehash /opt/custom-certificates
fi

# Start App Logic (n8n) in the background
echo "🚀  Starting App Logic..."
n8n "$@" &

N8N_PID=$!

# Wait for App Logic to be available
echo "⏳  Waiting for App Logic to respond..."
until curl -X POST -s http://localhost:5678/rest/owner/setup > /dev/null; do
  echo "🔁  Waiting..."
  sleep 10
done

# Configuration
FIRST_NAME="${IGRP_APP_LOGIC_ADMIN_FIRST_NAME}"
LAST_NAME="${IGRP_APP_LOGIC_ADMIN_LAST_NAME}"
EMAIL="${IGRP_APP_LOGIC_ADMIN_EMAIL}"
PASSWORD="${IGRP_APP_LOGIC_ADMIN_PASSWORD}"
API_KEY_LABEL="${IGRP_APP_LOGIC_API_KEY_LABEL:-igrp-app-logic}"
IGRP_APP_LOGIC_ENV="${IGRP_APP_LOGIC_ENV:-dev}"

CONFIG_FILE="/data/applogic/igrp-app-logic.json"
TEMP_FILE="${CONFIG_FILE}.tmp"
WORKFLOWS_FOLDER="/data/applogic/workflows"
# Run setup script
echo "⚙️  Attempting to create admin user..."
RESPONSE=$(curl -s -w "%{http_code}" -o /tmp/setup_response.txt \
  -X POST "http://localhost:5678/rest/owner/setup" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "'"$FIRST_NAME"'",
    "lastName": "'"$LAST_NAME"'",
    "email": "'"$EMAIL"'",
    "password": "'"$PASSWORD"'"
  }')

if [ "$RESPONSE" = "200" ] || [ "$RESPONSE" = "201" ]; then
  echo "✅  Setup completed successfully!"

  if [ "$(jq 'if . == {} then 1 else 0 end' "$WORKFLOWS_FOLDER/igrp-app-logic-workflows.json")" -eq 0 ]; then
    n8n import:workflow --input=$WORKFLOWS_FOLDER/igrp-app-logic-workflows.json
  fi

  if [ "$(jq 'if . == {} then 1 else 0 end' "$WORKFLOWS_FOLDER/igrp-app-logic-credentials.json")" -eq 0 ]; then
    n8n import:credentials --input=$WORKFLOWS_FOLDER/igrp-app-logic-credentials.json
  fi
  # when imported the workflow is disabled, must update to enable it.
  # These commands (update) operate on your n8n database. If you execute them while n8n is running,
  # the changes don't take effect until you restart n8n.
  n8n update:workflow --all --active=true
  exit 1
elif [ "$RESPONSE" = "400" ]; then
  MESSAGE=$(cat /tmp/setup_response.txt | grep -o 'Instance owner already setup')
  if [ -n "$MESSAGE" ]; then
    echo "ℹ️  Admin already set up. Skipping setup."
  else
    echo "❌  Setup failed with unexpected 400 error."
    cat /tmp/setup_response.txt
    exit 1
  fi
else
  echo "❌  Setup failed (HTTP $RESPONSE). Response:"
  cat /tmp/setup_response.txt
  exit 1
fi

# --- Login to obtain Auth Cookie ---

LOGIN_RESPONSE=$(curl -s -i -X POST "http://localhost:5678/rest/login" \
  -H "Content-Type: application/json" \
  -d '{"emailOrLdapLoginId": "'"$EMAIL"'", "password": "'"$PASSWORD"'"}')

AUTH_COOKIE=$(echo "$LOGIN_RESPONSE" | grep -i 'set-cookie' | grep -o 'n8n-auth=[^;]*' | sed 's/n8n-auth=//')

if [ -z "$AUTH_COOKIE" ]; then
  #echo "❌  Failed to obtain auth cookie."
  exit 1
fi


# --- Check if API Key exists ---

echo "🔍  Checking for existing API Keys..."
API_KEYS_RESPONSE=$(curl -s -X GET "http://localhost:5678/rest/api-keys" \
  -H "Cookie: n8n-auth=$AUTH_COOKIE")

# Check if 'data' is empty array
if echo "$API_KEYS_RESPONSE" | grep -q '"data":\[\]'; then
  echo "🆕   No existing API Keys found. Creating a new one..."

  API_KEY_CREATE_RESPONSE=$(curl -s -X POST "http://localhost:5678/rest/api-keys" \
    -H "Content-Type: application/json" \
    -H "Cookie: n8n-auth=$AUTH_COOKIE" \
    -d '{
      "label": "'"$API_KEY_LABEL"'",
      "expiresAt": 9747886400,
      "scopes": [
        "user:read",
        "user:list",
        "user:create",
        "user:changeRole",
        "user:delete",
        "sourceControl:pull",
        "securityAudit:generate",
        "project:create",
        "project:update",
        "project:delete",
        "project:list",
        "variable:create",
        "variable:delete",
        "variable:list",
        "tag:create",
        "tag:read",
        "tag:update",
        "tag:delete",
        "tag:list",
        "workflowTags:update",
        "workflowTags:list",
        "workflow:create",
        "workflow:read",
        "workflow:update",
        "workflow:delete",
        "workflow:list",
        "workflow:move",
        "workflow:activate",
        "workflow:deactivate",
        "execution:delete",
        "execution:read",
        "execution:list",
        "credential:create",
        "credential:move",
        "credential:delete"
    ]
    }')

  # Extract rawApiKey
  RAW_API_KEY=$(echo "$API_KEY_CREATE_RESPONSE" | grep -o '"rawApiKey":"[^"]*' | sed 's/"rawApiKey":"//')

  if [ -z "$RAW_API_KEY" ]; then
    echo "❌ Failed to create API Key."
    exit 1
  fi

  echo "✅  API Key created successfully."

  echo "💾   Saving API Key to /data/igrp-app-logic.json..."
  mkdir -p /data

  #echo "{\"igrpAppLogicApiKey\": \"$RAW_API_KEY\"}" > /data/igrp-app-logic.json

  if [ -f "$CONFIG_FILE" ] && jq -e . "$CONFIG_FILE" >/dev/null 2>&1; then

      jq --arg key "$RAW_API_KEY" '. + {igrpAppLogicApiKey: $key}' "$CONFIG_FILE" > "$TEMP_FILE"
  else

    echo "{\"igrpAppLogicApiKey\":\"$RAW_API_KEY\"}" > "$TEMP_FILE"
  fi

  cat "$TEMP_FILE" > "$CONFIG_FILE" && rm -f "$TEMP_FILE"

  echo "🎉   API Key saved successfully!"

  ENV_FILE="/data/applogic/.al.igrp.env"
  KEY_VAR="APPLOGIC_TOKEN"
  TEMP_ENV_FILE="${ENV_FILE}.tmp"

    ## Cria o arquivo se não existir
  touch "$ENV_FILE"

  # Inicializa arquivo temporário
  > "$TEMP_ENV_FILE"

  KEY_FOUND=0

  # Lê linha por linha
  while IFS= read -r line || [ -n "$line" ]; do
    if echo "$line" | grep -q "^$KEY_VAR="; then
      echo "$KEY_VAR=$RAW_API_KEY" >> "$TEMP_ENV_FILE"
      KEY_FOUND=1
    else
      echo "$line" >> "$TEMP_ENV_FILE"
    fi
  done < "$ENV_FILE"

  # Se a chave não foi encontrada, adiciona ao final
  if [ "$KEY_FOUND" -eq 0 ]; then
    echo "$KEY_VAR=$RAW_API_KEY" >> "$TEMP_ENV_FILE"
  fi

  # Substitui o conteúdo do arquivo original de forma segura
  cat "$TEMP_ENV_FILE" > "$ENV_FILE"
  rm -f "$TEMP_ENV_FILE"

else
  echo "ℹ️ API Key already exists. No action needed."
fi

# Só adiciona o cronjob se estiver em ambiente de desenvolvimento
if [ "$IGRP_APP_LOGIC_ENV" = "dev" ]; then
  # 1. Cria o arquivo crontab em tempo de execução
  mkdir -p /etc/cron.d

  echo "* * * * * /bin/sh /scripts/igrp-app-logic-workflow-export.sh >> /scripts/cron.log 2>&1" > /etc/cron.d/n8n-export

  # Corrige permissões
  chmod 0644 /etc/cron.d/n8n-export

  # Aplica crontab
  crontab /etc/cron.d/n8n-export

  # Inicia cron (Alpine usa crond)
  crond
else
  echo "🚫  Ambiente não é DEV. Cronjob de exportação não será configurado."
fi
tail -f /dev/null

# Wait for N8N process to end
wait $N8N_PID