import { MINIO } from './index';

export function minioProperties() {
  return {
    image: { type: 'string', required: true, default: 'minio/minio:latest' },
    container_name: { type: 'string', required: false, default: 'minio' },
    restart: {
      type: 'string',
      required: false,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      default: 'no',
    },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 9002 },
          external: { type: 'number', required: true, default: 9002 },
        },
      },
      default: [
        {
          internal: 9002,
          external: 9002,
        },
        {
          internal: 9003,
          external: 9003,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'minio' },
    environments: {
      type: 'array',
      default: [
        { key: 'MINIO_SCHEME', value: 'http' },
        { key: 'MINIO_FORCE_NEW_KEYS', value: 'no' },
        { key: 'MINIO_API_PORT_NUMBER', value: '9002' },
        { key: 'KC_HTTP_ENABLED', value: 'true' },
        { key: 'MINIO_DEFAULT_BUCKETS', value: 'user, apps' },
        { key: 'MINIO_BROWSER', value: 'on' },
        { key: 'MINIO_PROMETHEUS_AUTH_TYPE', value: 'public' },
        { key: 'MINIO_CONSOLE_PORT_NUMBER', value: '9001' },
        { key: 'MINIO_ROOT_USER', value: 'root' },
        { key: 'MINIO_ROOT_PASSWORD', value: 'password' },
        {
          key: 'MINIO_IDENTITY_OPENID_CONFIG_URL_PRIMARY_IAM',
          value:
            'http://${IGRP_IAM_HOSTNAME}/realms/${IGRP_IAM_TENANT}/.well-known/openid-configuration',
        },
        { key: 'MINIO_IDENTITY_OPENID_CLIENT_ID', value: 'minio' },
        { key: 'MINIO_IDENTITY_OPENID_CLIENT_SECRET', value: '************' },
        { key: 'MINIO_IDENTITY_OPENID_DISPLAY_NAME', value: 'Minio OpenID Login' },
        { key: 'MINIO_IDENTITY_OPENID_SCOPES', value: 'openid' },
        { key: 'MINIO_IDENTITY_OPENID_REDIRECT_URI_DYNAMIC', value: 'on' },
        { key: 'MINIO_IDENTITY_OPENID_REDIRECT_URI', value: 'http://${IGRP_IAM_HOSTNAME}' },
      ],
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true },
          value: { type: 'string', required: true },
        },
      },
    },
    env_file: { type: 'array', items: { type: 'object', properties: { file: { type: 'string', required: true, default: '.env' } } }, required: false, default: [ { file: '.env'} ] },
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
          name: { type: 'string', required: true, default: './minio_data/' },
          path: { type: 'string', required: true, default: '/minio_data' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: './minio_data/',
          path: '/minio_data',
          driver: 'local',
        },
      ],
    },
    entrypoint: [
      "/bin/sh",
      "-c",
      "/usr/bin/docker-entrypoint.sh minio server /data --console-address \":9001\" & \
pid=$!; \
until mc alias set minio http://localhost:9000 ${MINIO_ROOT_USER} ${MINIO_ROOT_PASSWORD} 2>/dev/null; do \
  sleep 1; \
done; \
mc mb minio/${IGRP_FILE_MANAGEMENT_STORAGE_NAME} || true; \
mc anonymous set public minio/${IGRP_FILE_MANAGEMENT_STORAGE_NAME} || true; \
wait $pid"
    ],
    command: {
      type: 'array',
      default: [
        { instruction: 'start' },
        { instruction: '/data' },
        { instruction: '--console-address :9003' },
      ],
      items: {
        type: 'object',
        properties: {
          instruction: {
            type: 'string',
            required: true,
          },
        },
      },
      required: false,
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true, default: 'type' },
          value: { type: 'string', required: true, default: 'file' },
        },
      },
      default: [
        {
          key: 'name',
          value: MINIO,
        },
        {
          key: 'type',
          value: 'file',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
