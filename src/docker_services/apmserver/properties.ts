export function apmserverProperties() {
  return {
    image: { type: "string", required: true, default: "elastic/apm-server:8.17.4" },
    container_name: { type: "string", required: false, default: "apm-server" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 8200 },
          external: { type: "number", required: true, default: 8200}
        },
        default: [
          {
            internal: 8200,
            external: 8200
          }
        ]
      },
    },
    hostname: { type: "string", required: false, default: 'apm-server' },
    dependsOn: {
      type: "array",
      items: { type: "object", properties: { service: { type: "string", required: true, default: "elasticsearch" } } },
    },
    networks: {
      type: "array",
      default: [
        { network: "{{slug}}-network" }
      ],
      items: { type: "object", properties: { network: { type: "number", required: true } } }
    },
    environments: {
      type: "array",
      items: {
        type: "object",
        properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
      },
      default: [
        {
          key: "output.elasticsearch.hosts",
          value: `["http://elasticsearch:9200"]`
        }
      ]
    },
    labels: {
      type: "array",
      items: {
        type: "object",
        properties: {
          key: {
            type: "string",
            required: true,
            default: "type"
          },
          value: {
            type: "string",
            required: true,
            default: "observability"
          }
        },
        default: [
          {
            key: 'type',
            value: 'observability'
          },
          {
            key: 'uuid',
            value: '{{uuid}}'
          }
        ]
      }
    },
  }
}