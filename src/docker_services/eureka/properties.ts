import { EUREKA } from './index';

export function eurekaProperties() {
  return {
    image: { type: 'string', required: true, default: 'springcloud/eureka:latest' },
    container_name: { type: 'string', required: false, default: 'eureka' },
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
          internal: { type: 'number', required: true, default: 8761 },
          external: { type: 'number', required: true, default: 8761 },
        },
      },
      default: [
        {
          internal: 8761,
          external: 8761,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'eureka' },
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
          value: { type: 'string', required: true, default: 'web' },
        },
      },
      default: [
        {
          key: 'name',
          value: EUREKA,
        },
        {
          key: 'type',
          value: 'service-discovery',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
