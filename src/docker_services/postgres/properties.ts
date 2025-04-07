export function postgresProperties() {
  return {
    type: "object",
    properties: {
      image: { type: "string", required: true, default: "postgres:16-alpine" },
      container_name: { type: "string", required: false, default: "postgres" },
      restart: { type: "string", required: false, enum: ['always', 'no', 'on-failure', 'unless-stopped'], default: "always" },
      ports: {
        type: "array",
        items: {
          type: "object",
          properties: {
            internal: { type: "number", required: true, default: 5434 },
            external: { type: "number", required: true, default: 5434 }
          }
        }
      },
      environments: {
        type: "array",
        default: [
          { key: "PGDATA", value: "/var/lib/postgresql/data/pgdata" },
          { key: "POSTGRES_DB", value: "${POSTGRES_DB}" },
          { key: "POSTGRES_USER", value: "${POSTGRES_USER}" },
          { key: "POSTGRES_PASSWORD", value: "${POSTGRES_PASSWORD}" },
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
            name: { type: "string", required: true, default: "postgres_data" },
            path: { type: "string", required: true, default: "/var/lib/postgresql/data" },
            driver: { type: "string", required: true, default: "local" }
          }
        }
      },
      shm_size: { type: "string", required: false, default: "128mb" }
    }
  }
}