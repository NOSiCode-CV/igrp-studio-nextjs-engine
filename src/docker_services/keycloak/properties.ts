export function keycloakProperties() {
  return {
    type: "object",
    properties: {
      image: { type: "string", required: true, default: "keycloak:25.0.4" },
      container_name: { type: "string", required: false, default: "keycloak" },
      restart: { type: "string", required: false, enum: ['always', 'no', 'on-failure', 'unless-stopped'], default: "always" },
      dependsOn: {
        type: "array",
        items: { type: "object", properties: { service: { type: "string", required: true, default: "keycloak_db" } } }
      },
      ports: {
        type: "array",
        items: {
          type: "object",
          properties: {
            internal: { type: "number", required: true, default: 8090 },
            external: { type: "number", required: true, default: 8090 }
          }
        }
      },
      hostname: { type: "string", required: false, default: 'keycloak' },
      environments: {
        type: "array",
        default: [
          { key: "KC_HOSTNAME", value: "http://${KEYCLOAK_URL}" },
          { key: "KC_HOSTNAME_PORT", value: "${KEYCLOAK_HOSTNAME_PORT}" },
          { key: "KC_HOSTNAME_STRICT_BACKCHANNEL", value: false },
          { key: "KC_HTTP_ENABLED", value: true },
          { key: "KC_HOSTNAME_STRICT_HTTPS", value: false },
          { key: "KC_HEALTH_ENABLED", value: true },
          { key: "KEYCLOAK_ADMIN", value: "${KEYCLOAK_ADMIN}" },
          { key: "KEYCLOAK_ADMIN_PASSWORD", value: "${KEYCLOAK_ADMIN_PASSWORD}" },
          { key: "KC_HOSTNAME_BACKCHANNEL_DYNAMIC", value: true },
          { key: "KC_DB", value: "${POSTGRES_DB}" },
          { key: "KC_DB_URL", value: "jdbc:postgresql://keycloak_db:5434/${POSTGRES_DB}" },
          { key: "KC_DB_USERNAME", value: "${POSTGRES_USER}" },
          { key: "KC_DB_PASSWORD", value: "${POSTGRES_PASSWORD}" },
        ],
        items: {
          type: "object",
          properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
        }
      },
      env_file: { type: "string", required: false, default: ".env" },
      networks: {
        type: "array",
        default: [
          { network: "{{slug}}-workspace" }
        ],
        items: { type: "object", properties: { network: { type: "number", required: true } } }
      },
      volumes: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string", required: true, default: "./data/" },
            path: { type: "string", required: true, default: "/opt/keycloak/data/import" },
            driver: { type: "string", required: true, default: "local" }
          }
        }
      },
      extra_hosts: {
        type: "array",
        items: {
          type: "object",
          properties: {
            hostname: {
              type: "string",
              required: true,
              default: "${KEYCLOAK_HOSTNAME}"
            },
            ip: {
              type: "string",
              required: true,
              default: "host-gateway"
            }
          }
        }
      },
      command: {
        type: "array",
        default: [
          { instruction: 'start' },
          { instruction: '--import-realm' },
          { instruction: '--features=admin-fine-grained-authz' },
        ],
        items: {
          type: "object",
          properties: {
            instruction: {
              type: "string",
              required: true
            }
          }
        },
        required: false
      },
    }
  }
}