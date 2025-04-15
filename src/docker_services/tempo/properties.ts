import { VolumeFile } from '../../interfaces/types';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { TEMPO } from './index';

export function tempoProperties() {
  return {
    image: { type: 'string', required: true, default: 'grafana/tempo:2.4.1' },
    container_name: { type: 'string', required: false, default: 'tempo' },
    command: {
      type: 'array',
      default: [
        { instruction: '-config.expand-env=true' },
        { instruction: '-config.file /etc/tempo-config.yml' },
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
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 3200 },
          external: { type: 'number', required: true, default: 3200 },
        },
      },
      default: [
        {
          internal: 3200,
          external: 3200,
        },
        {
          internal: 9411,
          external: 9411,
        },
        {
          reference: 4317,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'otel-collector' },
    environments: {
      type: 'array',
      default: [{ key: 'TEMPO_SERVICE_HTTP_PORT', value: '3200' }],
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
    volumes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true, default: './monitoring/tempo/tempo.yml' },
          path: { type: 'string', required: true, default: '/etc/tempo-config.yml' },
          driver: { type: 'string', required: true, default: 'none' },
        },
      },
      default: [
        {
          name: './monitoring/tempo/tempo.yml',
          path: '/etc/tempo-config.yml',
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

export function tempoVolumes(): Record<string, VolumeFile> {
  return {
    '/etc/tempo-config.yml': {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, {
        name: TEMPO,
        volume: 'tempo.yml',
      }),
      context: {},
    },
  };
}
