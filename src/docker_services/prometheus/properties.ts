import { VolumeFile } from '../../interfaces/types';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { PROMETHEUS } from './index';

export function prometheusProperties() {
  return {
    image: { type: "string", required: true, default: "prom/prometheus:v2.51.2" },
    container_name: { type: "string", required: false, default: "prometheus" },
    command: {
      type: "array",
      default: [
        { instruction: '--config.file=/etc/prometheus/prometheus.yml' },
      ],
      items: {
        type: "object",
        properties: {
          instruction: {
            type: "string",
            required: true
          }
        }
      },
      required: false
    },
    ports: {
      type: "array",
      items: {
        type: "object",
        properties: {
          internal: { type: "number", required: true, default: 9090 },
          external: { type: "number", required: true, default: 9090}
        }
      },
      default: [
        {
          internal: 9090,
          external: 9090
        }
      ]
    },
    hostname: { type: "string", required: false, default: 'prometheus' },
    networks: {
      type: "array",
      default: [
        { network: "{{slug}}-workspace" }
      ],
      items: { type: "object", properties: { network: { type: "number", required: true } } }
    },
    volumes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string", required: true, default: "./monitoring/prometheus/prometheus.yml" },
          path: { type: "string", required: true, default: "/etc/prometheus/prometheus.yml" },
          driver: { type: "string", required: true, default: "none" }
        }
      },
      default: [
        {
          name: "./monitoring/prometheus/prometheus.yml",
          path: "/etc/prometheus/prometheus.yml",
          driver: "none"
        }
      ]
    },
    labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "observability" } } } },
  }
}

export function prometheusVolumes(): Record<string, VolumeFile> {
  return {
    "/etc/prometheus/prometheus.yml": {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE_VOLUME, { name: PROMETHEUS, volume: "prometheus.yml" }),
      context: {}
    }
  }
}