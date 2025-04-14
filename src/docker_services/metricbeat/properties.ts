export function metricbeatProperties() {
  return {
    image: { type: "string", required: true, default: "elastic/metricbeat:8.17.4" },
    container_name: { type: "string", required: false, default: "metricbeat" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 5046 },
          external: { type: "number", required: true, default: 5046} // TODO: check how to handle default port
        }
      },
      default: [
        {
          internal: 5046,
          external: 5046
        }
      ]
    },
    hostname: { type: "string", required: false, default: 'metricbeat' },
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
          name: { type: "string", required: true, default: "./metricbeat/metricbeat.yml" },
          path: { type: "string", required: true, default: "/usr/share/metricbeat/metricbeat.yml" },
          driver: { type: "string", required: true, default: "none" }
        }
      },
      default: [
        {
          name: "./metricbeat/metricbeat.yml",
          path: "/usr/share/metricbeat/metricbeat.yml",
          driver: "none"
        },
        {
          name: "/sys/fs/cgroup",
          path: "/hostfs/sys/fs/cgroup:ro",
          driver: "none"
        },
        {
          name: "/proc",
          path: "/hostfs/proc:ro",
          driver: "none"
        },
        {
          name: "/",
          path: "/hostfs:ro",
          driver: "none"
        }
      ]
    },
    labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "observability" } } } },
  }
}