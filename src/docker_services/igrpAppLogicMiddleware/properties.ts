import { IGRP_APP_LOGIC_MIDDLEWARE } from './index';
import { COMMON_FILES, DIRECTORIES, ENVIRONMENT_FILES } from '../../utils/constants';

export function igrpAppLogicMiddlewareProperties() {
  return {
    image: { type: 'string', required: true, default: 'registry.nosi.cv/igrp/igrp-app-logic-middleware-api:latest' },
    container_name: { type: 'string', required: false, default: 'igrp-app-logic-middleware-api' },
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
          internal: { type: 'number', required: true, default: 7980 },
          external: { type: 'number', required: true, default: 7980 },
        },
      },
      default: [
        {
          internal: 7980,
          external: 7980,
        },
      ],
    },
    volumes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true, default: `./${DIRECTORIES.IGRPSTUDIO}/applogic/${COMMON_FILES.JSON_IGRP_APP_LOGIC}` },
          path: { type: 'string', required: true, default: '/data/applogic/igrp-app-logic.json' },
          driver: { type: 'string', required: true, default: 'none' },
        },
      },
      default: [
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/${COMMON_FILES.JSON_IGRP_APP_LOGIC}`,
          path: '/data/applogic/igrp-app-logic.json',
          driver: 'none',
        }
      ],
    },
    hostname: { type: 'string', required: false, default: 'igrp-app-logic-middleware' },
    env_file: { type: 'array', items: { type: 'object', properties: { file: { type: 'string', required: true, default: '.am.igrp.env' } } }, required: true, default: [ { file: '.am.igrp.env'} ] },
    environments: {
      type: 'array',
      default: [
        { key: 'DB_POSTGRESDB_HOST', value: '${IGRP_APP_LOGIC_DB_HOSTNAME}' },
        { key: 'DB_POSTGRESDB_PORT', value: '5432' },
        { key: 'DB_POSTGRESDB_DATABASE', value: '${IGRP_APP_LOGIC_MIDDLEWARE_DB_NAME}' },
        { key: 'DB_POSTGRESDB_USER', value: '${IGRP_APP_LOGIC_MIDDLEWARE_DB_USER}' },
        { key: 'APPLOGIC_HOST', value: 'http://${IGRP_APP_LOGIC_HOSTNAME}:5678' },
        { key: 'APPLOGIC_TOKEN', value: '{{token}}' },
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
          value: IGRP_APP_LOGIC_MIDDLEWARE,
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