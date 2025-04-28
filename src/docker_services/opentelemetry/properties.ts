import { VolumeFile } from '../../interfaces/types';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { OPENTELEMETRY } from './index';

export function opentelemetryProperties() {
  return {
    image: {
      type: 'string',
      required: true,
      default: 'otel/opentelemetry-collector-contrib:0.82.0',
    },
    container_name: { type: 'string', required: false, default: 'otel-collector' },
    restart: {
      type: 'string',
      required: false,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      default: 'always',
    },
    command: {
      type: 'array',
      default: [{ instruction: '--config=/etc/otelcol-cont/otel-collector.yml' }],
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
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 4317 },
          external: { type: 'number', required: true, default: 4317 },
        },
      },
      default: [
        {
          internal: 1888,
          external: 1888,
        },
        {
          internal: 8888,
          external: 8888,
        },
        {
          internal: 8889,
          external: 8889,
        },
        {
          internal: 13133,
          external: 13133,
        },
        {
          internal: 4317,
          external: 4317,
        },
        {
          internal: 4318,
          external: 4318,
        },
        {
          internal: 55679,
          external: 55679,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'otel-collector' },
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
          name: {
            type: 'string',
            required: true,
            default: './monitoring/collector/otel-collector.yml',
          },
          path: { type: 'string', required: true, default: '/etc/otelcol-cont/otel-collector.yml' },
          driver: { type: 'string', required: true, default: 'none' },
        },
      },
      default: [
        {
          name: './monitoring/collector/otel-collector.yml',
          path: '/etc/otelcol-cont/otel-collector.yml',
          driver: 'none',
        },
      ],
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true, default: 'type' },
          value: { type: 'string', required: true, default: 'observability' },
        },
      },
      default: [
        {
          key: 'name',
          value: OPENTELEMETRY,
        },
        {
          key: 'type',
          value: 'observability',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}

export function opentelemetryVolumes(): Record<string, VolumeFile> {
  return {
    '/etc/otelcol-cont/otel-collector.yml': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: OPENTELEMETRY,
        volume: 'otel-collector.yml',
      }),
      context: {},
    },
  };
}
