import { IGRP_USER_MANAGEMENT } from './index';

export function igrpUserManagementProperties() {
  return {
    image: { type: 'string', required: true, default: 'registry.nosi.cv/igrp/igrp-user-management-api:latest' },
    container_name: { type: 'string', required: false, default: 'igrp-user-management' },
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
          internal: { type: 'number', required: true, default: 8081 },
          external: { type: 'number', required: true, default: 8081 },
        },
      },
      default: [
        {
          internal: 8081,
          external: 8081,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'igrp-user-management' },
    env_file: { type: 'array', items: { type: 'object', properties: { file: { type: 'string', required: true, default: '.um.igrp.env' } } }, required: true, default: [ { file: '.um.igrp.env'} ] },
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
          value: IGRP_USER_MANAGEMENT,
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
