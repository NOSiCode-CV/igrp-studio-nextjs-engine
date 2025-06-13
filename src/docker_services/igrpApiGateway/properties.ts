import { IGRP_API_GATEWAY } from './index';

export function igrpApiGatewayProperties() {
  return {
    image: { type: 'string', required: true, default: 'registry.nosi.cv/igrp/igrp-gateway:latest' },
    container_name: { type: 'string', required: false, default: 'igrp-api-gateway' },
    restart: {
      type: 'string',
      required: false,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      default: 'on-failure',
    },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 7070 },
          external: { type: 'number', required: true, default: 7070 },
        },
      },
      default: [
        {
          internal: 7070,
          external: 7070,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'igrp-api-gateway' },
    environments: {
      type: 'array',
      default: [
        { key: 'SPRING_PROFILES_ACTIVE', value: 'production' },
        { key: 'SERVER_PORT', value: '7070' },
        { key: 'EUREKA_CLIENT_SERVICEURL_DEFAULTZONE', value: 'http://eureka:8761/eureka'}
      ],
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true },
          value: { type: 'string', required: true },
        },
      },
    },
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
          value: IGRP_API_GATEWAY,
        },
        {
          key: 'type',
          value: 'web',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}