import { IGRP_APP_MANAGEMENT } from './index';

export function igrpAppManagementProperties() {
  return {
    image: { type: 'string', required: true, default: 'registry.nosi.cv/igrp/igrp-app-management-api:latest' },
    container_name: { type: 'string', required: false, default: 'igrp-app-management' },
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
          internal: { type: 'number', required: true, default: 8082 },
          external: { type: 'number', required: true, default: 8082 },
        },
      },
      default: [
        {
          internal: 8082,
          external: 8082,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'igrp-app-management' },
    env_file: { type: 'array', items: { type: 'object', properties: { file: { type: 'string', required: true, default: '.am.igrp.env' } } }, required: true, default: [ { file: '.am.igrp.env'} ] },
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
          value: IGRP_APP_MANAGEMENT,
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
