export function filebeatProperties() {
  return {
    image: { type: "string", required: true, default: "elastic/filebeat:8.17.4" },
    container_name: { type: "string", required: false, default: "filebeat" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 5045 },
          external: { type: "number", required: true, default: 5045} // TODO: check how to handle default port
        }
      },
      default: [
        {
          internal: 5045,
          external: 5045
        }
      ]
    },
    hostname: { type: "string", required: false, default: 'filebeat' },
    dependsOn: {
      type: "array",
      items: { type: "object", properties: { service: { type: "string", required: true, default: "elasticsearch" } } },
      default: [
        {
          service: "elasticsearch"
        },
        {
          service: "kibana"
        },
      ]
    },
    networks: {
      type: "array",
      default: [
        { network: "{{slug}}-network" }
      ],
      items: { type: "object", properties: { network: { type: "number", required: true } } }
    },
    volumes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string", required: true, default: "./filebeat/filebeat.yml" },
          path: { type: "string", required: true, default: "/usr/share/filebeat/filebeat.yml" },
          driver: { type: "string", required: true, default: "none" }
        }
      },
      default: [
        {
          name: "./filebeat/filebeat.yml",
          path: "/usr/share/filebeat/filebeat.yml",
          driver: "none"
        },
        {
          name: "/var/lib/docker/containers",
          path: "/var/lib/docker/containers:ro",
          driver: "none"
        },
        {
          name: "/var/run/docker.sock",
          path: "/var/run/docker.sock:ro",
          driver: "none"
        },
      ]
    },
    labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "observability" } } } },
  }
}