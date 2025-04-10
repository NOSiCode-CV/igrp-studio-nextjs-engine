export function grafanaProperties() {
  return {
    image: { type: "string", required: true, default: "grafana/grafana:10.4.2" },
    container_name: { type: "string", required: false, default: "grafana" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 2000 },
          external: { type: "number", required: true, default: 2000}
        }
      },
    },
    hostname: { type: "string", required: false, default: 'grafana' },
    environments: {
      type: "array",
      default: [
        { key: "GF_SECURITY_ADMIN_USER", value: "admin" },
        { key: "GF_SECURITY_ADMIN_PASSWORD", value: "password" },
        { key: "GF_USERS_ALLOW_SIGN_UP", value: "false" },
      ],
      items: {
        type: "object",
        properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
      }
    },
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
          name: { type: "string", required: true, default: "grafana_data" },
          path: { type: "string", required: true, default: "/var/lib/grafana" },
          driver: { type: "string", required: true, default: "local" }
        }
      }
    },
    labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "observability" } } } },
  }
}