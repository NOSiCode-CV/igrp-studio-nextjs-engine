import { LOGSTASH } from './index';

export function logstashProperties() {
  return {
    image: { type: 'string', required: true, default: 'logstash:8.17.4' },
    container_name: { type: 'string', required: false, default: 'logstash' },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 5044 },
          external: { type: 'number', required: true, default: 5044 },
        },
      },
      default: [
        {
          internal: 5044,
          external: 5044,
        },
        {
          internal: 9600,
          external: 9600,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'logstash' },
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
          name: { type: 'string', required: true, default: 'logstash_data' },
          path: { type: 'string', required: true, default: '/usr/share/logstash/data/' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: 'logstash_data',
          path: '/usr/share/logstash/data/',
          driver: 'local',
        },
        {
          name: './elk-config/logstash/logstash.yml',
          path: '/usr/share/logstash/config/logstash.yml',
          driver: 'none',
        },
        {
          name: './elk-config/logstash/logstash.conf',
          path: '/usr/share/logstash/pipeline/logstash.conf',
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
          key: 'name',
          value: LOGSTASH,
        },
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
