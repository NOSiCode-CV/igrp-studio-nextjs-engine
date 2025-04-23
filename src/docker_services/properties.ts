export function getBaseDockerServiceProperties() {
  return {
    image: { type: "string", required: true },
    build: { type: "string", required: false },
    container_name: { type: "string", required: false },
    restart: { type: "string", required: false, enum: ['always', 'no', 'on-failure', 'unless-stopped'] },
    dependsOn: {
      type: "array",
      items: { type: "object", properties: { service: { type: "string", required: true } }, default: [ { service: 'any' }] }
    },
    extends: { type: "string", required: false },
    hostname: { type: "string", required: false },
    profiles: {
      type: "array",
      items: { type: "object", properties: { profile: { type: "string", required: true } } }
    },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true },
          external: { type: "number", required: true }
        }
      }
    },
    expose: {
      type: "array",
      items: { type: "object", properties: { port: { type: "number", required: true } } }
    },
    networks: {
      type: "array",
      items: { type: "object", properties: { network: { type: "number", required: true } } }
    },
    domainname: { type: "string" },
    environments: {
      type: "array",
      items: {
        type: "object",
        properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
      }
    },
    env_file: { type: "string", required: false },
    extra_hosts: {
      type: "array",
      items: { type: "object", properties: { hostname: { type: "string", required: true }, ip: { type: "string", required: true } } }
    },
    labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true }, value: { type: "string", required: true } } } },
    volumes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string", required: true },
          path: { type: "string", required: true },
          driver: { type: "string", required: true }
        }
      }
    },
    tmpfs: { type: "array", items: { type: "object", properties: { storage: { type: "number", required: true } } } },
    secret: { type: "array", items: { type: "object", properties: { secret: { type: "number", required: true } } } },
    configs: { type: "array", items: { type: "object", properties: { config: { type: "string", required: true } } } },
    command: { type: "array", items: { type: "object", properties: { instruction: { type: "string", required: true } } } },
    entrypoint: { type: "array", items: { type: "object", properties: { instruction: { type: "string", required: true } } } },
    deploy: {
      type: "object",
      properties: {
        replicas: { type: "number" },
        restart_policy: { type: "string" },
        resources: {
          type: "object",
          properties: {
            limits: {
              type: "object",
              properties: { cpus: { type: "string", required: true }, memory: { type: "string", required: true } }
            },
            reservations: {
              type: "object",
              properties: { cpus: { type: "string", required: true }, memory: { type: "string", required: true } }
            }
          }
        }
      }
    },
    healthcheck: {
      type: "object",
      properties: {
        test: { type: "array", items: { type: "object", properties: { instruction: { type: "string", required: true } } } },
        interval: { type: "string", required: true },
        timeout: { type: "string", required: true },
        retries: { type: "number", required: true }
      }
    },
    logging: {
      type: "object",
      properties: {
        driver: { type: "string", enum: ["json-file", "syslog", "fluentd"], required: false },
        options: {
          type: "object",
          properties: { max_size: { type: "string", required: true }, max_file: { type: "string", required: true } }
        }
      }
    },
    ulimits: {
      type: "object",
      properties: {
        memlock: {
          type: "object",
          required: true,
          properties: { soft: { type: "number", required: false, default: -1 }, hard: { type: "number", required: false, default: -1 }, }
        }
      }
    },
    ipc: { type: "string", required: false },
    pid: { type: "string", required: false },
    runtime: { type: "string", required: false },
    init: { type: "boolean", required: false },
    stdin_open: { type: "boolean", required: false },
    stop_signal: { type: "string", required: false },
    shm_size: { type: "string", required: false }
  }
}