export function fleetserverProperties() {
  return {
    image: { type: "string", required: true, default: "elastic/elastic-agent:8.17.4" },
    container_name: { type: "string", required: false, default: "fleet-server" },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 8220 },
          external: { type: "number", required: true, default: 8220}
        }
      },
      default: [
        {
          internal: 8220,
          external: 8220
        }
      ]
    },
    hostname: { type: "string", required: false, default: 'fleet-server' },
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
    environments: {
      type: "array",
      items: {
        type: "object",
        properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
      },
      default: [
        { key: "FLEET_SERVER_ENABLE", value: "1" },
        { key: "FLEET_SERVER_ELASTICSEARCH_HOST", value: "http://elasticsearch:9200" },
        { key: "FLEET_SERVER_INSECURE_HTTP", value: "true" },
        { key: "KIBANA_FLEET_SETUP", value: "1" },
        { key: "KIBANA_HOST", value: "http://kibana:5601" },
        { key: "FLEET_SERVER_POLICY_ID", value: "fleet-server-policy" },
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
    },
  }
}