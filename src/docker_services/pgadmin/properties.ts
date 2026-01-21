import { PGADMIN } from './index';

export function pgadminProperties() {
  return {
    image: { type: 'string', required: true, default: 'dpage/pgadmin4:latest' },
    container_name: { type: 'string', required: false, default: 'pgadmin' },
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
          internal: { type: 'number', required: true, default: 8443 },
          external: { type: 'number', required: true, default: 8443 },
        },
      },
      default: [
        {
          internal: 8443,
          external: 8443,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'pgadmin' },
    environments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true },
          value: { type: 'string', required: true },
        },
      },
      default: [
        {  key: 'PGADMIN_DEFAULT_EMAIL', value: 'superadmin@igrp.cv' },
        {  key: 'PGADMIN_DEFAULT_PASSWORD', value: 'igrp123456' },
        {  key: 'SCRIPT_NAME', value: '/pgadmin' },
        { key: 'PGADMIN_LISTEN_PORT', value: '80' },
      ],
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
          name: { type: 'string', required: true, default: 'pgadmin_data' },
          path: { type: 'string', required: true, default: '/var/lib/pgadmin' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: 'pgadmin_data',
          path: '/var/lib/pgadmin',
          driver: 'local',
        },
      ],
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true, default: 'type' },
          value: { type: 'string', required: true, default: 'database' },
        },
      },
      default: [
        {
          key: 'name',
          value: PGADMIN,
        },
        {
          key: 'type',
          value: 'database',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
