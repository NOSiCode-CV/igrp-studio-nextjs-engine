export function lokiProperties() {
  return {
    image: { type: "string", required: true, default: "grafana/loki:3.0.0" },
    container_name: { type: "string", required: false, default: "loki" },
    command: {
      type: "array",
      default: [
        { instruction: '-config.expand-env=true' },
        { instruction: '-config.file=/etc/loki/local-config.yml' },
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
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 3100 },
          external: { type: "number", required: true, default: 3100 }
        }
      },
      default: [
        {
          internal: 3100,
          external: 3100
        }
      ]
    },
    hostname: { type: "string", required: false, default: 'loki' },
    networks: {
      type: "array",
      default: [
        { network: "{{slug}}-network" }
      ],
      items: { type: "object", properties: { network: { type: "number", required: true } } }
    },
    dependsOn: {
      type: "array",
      items: { type: "object", properties: { service: { type: "string", required: true, default: "promtail" } } }
    },
  }
}