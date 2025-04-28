#!/bin/sh

# Trust custom certificates if the folder exists
if [ -d /opt/custom-certificates ]; then
  echo "🔐 Trusting custom certificates from /opt/custom-certificates."
  export NODE_OPTIONS="--use-openssl-ca $NODE_OPTIONS"
  export SSL_CERT_DIR=/opt/custom-certificates
  c_rehash /opt/custom-certificates
fi

# Start N8N in the background
echo "🚀  Starting App Logic..."
n8n "$@" &

N8N_PID=$!

# Wait for N8N to be available
echo "⏳  Waiting for App Logic to respond..."
until curl -s http://localhost:5678/healthz > /dev/null; do
  echo "🔁  Waiting..."
  sleep 10
done

# Run setup script
echo "⚙️  Running setup..."

# Configuration (can be replaced with environment variables)
FIRST_NAME="${IGRP_APP_LOGIC_ADMIN_FIRST_NAME}"
LAST_NAME="${IGRP_APP_LOGIC_ADMIN_LAST_NAME}"
EMAIL="${IGRP_APP_LOGIC_ADMIN_EMAIL}"
PASSWORD="${IGRP_APP_LOGIC_ADMIN_PASSWORD}"

echo "⚙️  Creating admin user..."
RESPONSE=$(curl -sS -o /dev/null -w "%{http_code}" \
  -X POST "http://localhost:5678/rest/owner/setup" \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "'"$FIRST_NAME"'",
    "lastName": "'"$LAST_NAME"'",
    "email": "'"$EMAIL"'",
    "password": "'"$PASSWORD"'"
  }')

case $RESPONSE in
  200|201)
    echo "✅  Setup completed successfully!"
    ;;
  400)
    echo "ℹ️  Setup has already been completed previously."
    ;;
  *)
    echo "❌  Setup failed (HTTP $RESPONSE). Check App Logic logs for details."
    exit 1
    ;;
esac

# Optional: Keep container alive
tail -f /dev/null

# Wait for N8N process to end (not strictly needed if using tail)
wait $N8N_PID
