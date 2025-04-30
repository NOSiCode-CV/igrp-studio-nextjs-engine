import { COMMON_FILES, DIRECTORIES, TEMPLATES } from '../../utils/constants';
import { VolumeFile } from '../../interfaces/types';
import { replaceTemplate } from '../../utils/helpers';
import { IGRP_APP_LOGIC } from './index';

let encryptionKey: string = ''

export function igrpAppLogicProperties() {

  encryptionKey = generateKey()

  return {
    image: { type: 'string', required: true, default: 'registry.nosi.cv/formacao-igrp/igrp-app-logic:latest' },
    container_name: { type: 'string', required: false, default: 'igrp-app-logic' },
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
          internal: { type: 'number', required: true, default: 5678 },
          external: { type: 'number', required: true, default: 5678 },
        },
      },
      default: [
        {
          internal: 5678,
          external: 5678,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'igrp-app-logic' },
    environments: {
      type: 'array',
      default: [
        { key: 'DB_TYPE', value: 'postgresdb' },
        { key: 'DB_POSTGRESDB_HOST', value: '{{slug}}-igrp-db' },
        { key: 'DB_POSTGRESDB_PORT', value: '5432' },
        { key: 'DB_POSTGRESDB_DATABASE', value: '${IGRP_APP_LOGIC_DB_NAME}' },
        { key: 'DB_POSTGRESDB_USER', value: '${IGRP_APP_LOGIC_DB_USER}' },
        { key: 'DB_POSTGRESDB_PASSWORD', value: '${IGRP_APP_LOGIC_DB_PASSWORD}' },
        { key: 'N8N_ENCRYPTION_KEY', value: encryptionKey },
        { key: 'N8N_PROXY_HOPS', value: '1' },
        { key: 'N8N_SECURE_COOKIE', value: 'false' },
      ],
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true },
          value: { type: 'string', required: true },
        },
      },
    },
    env_file: {
      type: 'array',
      items: {
        type: 'object',
        properties: { file: { type: 'string', required: true, default: '.igrp.env' } },
      },
      required: false,
      default: [{ file: '.igrp.env' }],
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
          name: { type: 'string', required: true, default: 'igrp_app_logic_storage' },
          path: { type: 'string', required: true, default: '/home/node/.n8n' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: 'igrp_app_logic_storage',
          path: '/home/node/.n8n',
          driver: 'local',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/${COMMON_FILES.INIT_IGRP_APP_LOGIC}`,
          path: '/docker-entrypoint.sh',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/${COMMON_FILES.IGRP_APP_LOGIC_WORKFLOW_EXPORT}`,
          path: '/scripts/igrp-app-logic-workflow-export.sh',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/${COMMON_FILES.JSON_IGRP_APP_LOGIC}`,
          path: '/data/applogic/igrp-app-logic.json',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/workflows/${COMMON_FILES.JSON_IGRP_APP_LOGIC_CREDENTIALS}`,
          path: '/data/applogic/workflows/igrp-app-logic-credentials.json',
          driver: 'none',
        },
        {
          name: `./${DIRECTORIES.IGRPSTUDIO}/applogic/workflows/${COMMON_FILES.JSON_IGRP_APP_LOGIC_WORKFLOWS}`,
          path: '/data/applogic/workflows/igrp-app-logic-workflows.json',
          driver: 'none',
        },
      ],
    },
    dependsOn: {
      type: 'array',
      items: {
        type: 'object',
        required: false,
        properties: { service: { type: 'string', required: true, default: '{{slug}}-igrp-db' } },
        default: [{ service: '{{slug}}-igrp-db' }],
      },
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            required: true,
            default: 'type',
          },
          value: {
            type: 'string',
            required: true,
            default: 'web',
          },
          default: [
            {
              key: 'name',
              value: IGRP_APP_LOGIC,
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
      },
    },
  };
}

function generateKey(length: number = 20): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    result += charset.charAt(array[i] % charset.length);
  }

  return result;
}

export function igrpAppLogicVolumes(): Record<string, VolumeFile> {
  return {
    '/docker-entrypoint.sh': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: IGRP_APP_LOGIC,
        volume: 'igrp-init-app-logic.sh',
      }),
      context: {},
    },
    '/scripts/igrp-app-logic-workflow-export.sh': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: IGRP_APP_LOGIC,
        volume: 'igrp-app-logic-workflow-export.sh',
      }),
      context: {},
    },
    '/data/applogic/igrp-app-logic.json': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: IGRP_APP_LOGIC,
        volume: 'igrp-app-logic.json',
      }),
      context: {
        encryptionKey: encryptionKey
      },
    },
    '/data/applogic/workflows/igrp-app-logic-credentials.json': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: IGRP_APP_LOGIC,
        volume: 'igrp-app-logic-credentials.json',
      }),
      context: {
      },
    },
    '/data/applogic/workflows/igrp-app-logic-workflows.json': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: IGRP_APP_LOGIC,
        volume: 'igrp-app-logic-workflows.json',
      }),
      context: {
      },
    }
  }
}