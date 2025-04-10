export function elasticsearchProperties() {
  return {
    type: "object",
    properties: {
      image: { type: "string", required: true, default: "elasticsearch:8.17.4" },
      container_name: { type: "string", required: false, default: "elasticsearch" },
      ports: {
        type: "array",
        items: {
          type: "object",
          properties: {
            internal: { type: "number", required: true, default: 9200 },
            external: { type: "number", required: true, default: 9200}
          }
        },
        default: [
          {
            internal: 9200,
            external: 9200,
          },
          {
            internal: 9300,
            external: 9300,
          },
        ]
      },
      hostname: { type: "string", required: false, default: 'elasticsearch' },
      environments: {
        type: "array",
        default: [
          { key: "ELASTIC_PASSWORD", value: "password" },
          { key: "discovery.type", value: "single-node" },
          { key: "http.host", value: "0.0.0.0" },
          { key: "transport.host", value: "0.0.0.0" },
          { key: "xpack.security.enabled", value: "false" },
          { key: "xpack.monitoring.enabled", value: "false" },
          { key: "cluster.name", value: "elasticsearch" },
          { key: "bootstrap.memory_lock", value: "true" },
        ],
        items: {
          type: "object",
          properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
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
            name: { type: "string", required: true, default: "elasticsearch_data" },
            path: { type: "string", required: true, default: "/usr/share/elasticsearch/data/" },
            driver: { type: "string", required: true, default: "local" }
          }
        },
        default: [
          {
            name: "elasticsearch_data",
            path: "/usr/share/elasticsearch/data/",
            driver: "local"
          },
          {
            name: "./elk-config/elasticsearch/elasticsearch.yml",
            path: "/usr/share/elasticsearch/config/elasticsearch.yml",
            driver: "none"
          },
        ]
      },
      labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "observability" } } } },
    }
  }
}