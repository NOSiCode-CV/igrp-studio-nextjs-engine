export function redisProperties() {
  return {
    image: { type: "string", required: true, default: "redis:8.0-rc1" },
    container_name: { type: "string", required: false, default: "redis" },
    restart: { type: "string", required: false, enum: ['always', 'no', 'on-failure', 'unless-stopped'], default: "always" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 6379 },
          external: { type: "number", required: true, default: 6379 }
        }
      },
      default: [
        {
          internal: 8200,
          external: 8200
        }
      ]
    },
    hostname: { type: "string", required: false, default: 'redis' },
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
          name: { type: "string", required: true, default: "redis_data" },
          path: { type: "string", required: true, default: "/data" },
          driver: { type: "string", required: true, default: "local" }
        }
      },
      default: [
        {
          name: "redis_data",
          path: "/data",
          driver: "local"
        }
      ]
    },
    command: {
      type: "array",
      default: [
        { instruction: 'redis-server' },
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