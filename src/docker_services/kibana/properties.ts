export function kibanaProperties() {
  return {
    image: { type: 'string', required: true, default: 'kibana:8.17.4' },
    container_name: { type: 'string', required: false, default: 'kibana' },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 5601 },
          external: { type: 'number', required: true, default: 5601 },
        },
      },
      default: [
        {
          internal: 5601,
          external: 5601,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'kibana' },
    environments: {
      type: 'array',
      default: [
        { key: 'ELASTICSEARCH_HOSTS', value: 'http://elasticsearch:9200' },
        { key: 'xpack.security.enabled', value: 'false' },
      ],
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true },
          value: { type: 'string', required: true },
        },
      },
    },
    dependsOn: {
      type: 'array',
      items: {
        type: 'object',
        properties: { service: { type: 'string', required: true, default: 'elasticsearch' } },
      },
    },
    networks: {
      type: 'array',
      default: [{ network: '{{slug}}-network' }],
      items: { type: 'object', properties: { network: { type: 'number', required: true } } },
    },
    volumes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true, default: 'kibana_data' },
          path: { type: 'string', required: true, default: '/usr/share/kibana/data/' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: 'kibana_data',
          path: '/usr/share/kibana/data/',
          driver: 'local',
        },
        {
          name: './elk-config/kibana/kibana.yml',
          path: '/usr/share/kibana/config/kibana.yml',
          driver: 'none',
        },
      ],
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true, default: 'type' },
          value: { type: 'string', required: true, default: 'observability' },
        },
      },
      default: [
        {
          key: 'type',
          value: 'observability',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
