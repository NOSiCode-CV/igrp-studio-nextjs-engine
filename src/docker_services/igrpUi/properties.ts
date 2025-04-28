import { IGRP_UI } from './index';

export function igrpUiProperties() {
  return {
    image: {
      type: 'string',
      required: true,
      default: 'registry.nosi.cv/formacao-igrp/igrp-ui-dev:demo-local',
    },
    container_name: { type: 'string', required: false, default: 'igrp-ui' },
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
          internal: { type: 'number', required: true, default: 3000 },
          external: { type: 'number', required: true, default: 3000 },
        },
      },
      default: [
        {
          internal: 3000,
          external: 3000,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'igrp-ui' },
    env_file: {
      type: 'array',
      items: {
        type: 'object',
        properties: { file: { type: 'string', required: true, default: '.ui.igrp.env' } },
      },
      required: true,
      default: [{ file: '.igrp.env' }, { file: '.ui.igrp.env' }],
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
          value: IGRP_UI,
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
