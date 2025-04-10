export function mysqlProperties() {
  return {
    image: { type: "string", required: true, default: "mysql:8.0" },
    container_name: { type: "string", required: false, default: "mysql" },
    restart: { type: "string", required: false, enum: ['always', 'no', 'on-failure', 'unless-stopped'], default: "always" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 3306 },
          external: { type: "number", required: true, default: 3306 }
        }
      }
    },
    hostname: { type: "string", required: false, default: 'mysql' },
    environments: {
      type: "array",
      default: [
        { key: "MYSQL_DATABASE", value: "${MYSQL_DATABASE}" },
        { key: "MYSQL_USER", value: "${MYSQL_USER}" },
        { key: "MYSQL_PASSWORD", value: "${MYSQL_PASSWORD}" },
        { key: "MYSQL_ROOT_PASSWORD", value: "${MYSQL_ROOT_PASSWORD}" },
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
          name: { type: "string", required: true, default: "mysql_data" },
          path: { type: "string", required: true, default: "/var/lib/mysql" },
          driver: { type: "string", required: true, default: "local" }
        }
      }
    },
    labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "database" } } } },
  }
}