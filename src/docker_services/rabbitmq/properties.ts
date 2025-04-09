export function rabbitmqProperties() {
  return {
    type: "object",
    properties: {
      image: { type: "string", required: true, default: "rabbitmq:4.1.0-rc.1" },
      container_name: { type: "string", required: false, default: "rabbitmq" },
      restart: { type: "string", required: false, enum: ['always', 'no', 'on-failure', 'unless-stopped'], default: "always" },
      ports: {
        type: "array",
        items: {
          type: "object",
          properties: {
            internal: { type: "number", required: true, default: 5672 },
            external: { type: "number", required: true, default: 5672}
          }
        },
        default: [
          {
            internal: 5672,
            external: 5672
          },
          {
            internal: 15672,
            external: 15672
          },
        ]
      },
      hostname: { type: "string", required: false, default: 'rabbitmq' },
      environments: {
        type: "array",
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
            name: { type: "string", required: true, default: "rabbitmq_data" },
            path: { type: "string", required: true, default: "/data" },
            driver: { type: "string", required: true, default: "local" }
          }
        }
      },
      command: {
        type: "array",
        default: [
          { instruction: 'rabbitmq-server' },
          { instruction: '--requirepass' },
          { instruction: 'password' },
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
      labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "cache" } } } },
    }
  }
}