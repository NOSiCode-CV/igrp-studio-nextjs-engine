import { NGINX } from './index';

export function nginxProperties() {
  return {
    image: { type: 'string', required: true, default: 'nginx:1.25-alpine' },
    container_name: { type: 'string', required: false, default: 'nginx' },
    restart: {
      type: 'string',
      required: false,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      default: 'always',
    },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 2575 },
          external: { type: 'number', required: true, default: 2575 },
        },
      },
      default: [
        {
          internal: 2575,
          external: 2575,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'nginx' },
    networks: {
      type: 'array',
      default: [{ network: '{{slug}}-network' }],
      items: { type: 'object', properties: { network: { type: 'number', required: true } } },
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true, default: 'type' },
          value: { type: 'string', required: true, default: 'service-discovery' },
        },
      },
      default: [
        {
          key: 'name',
          value: NGINX,
        },
        {
          key: 'type',
          value: 'proxy',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
