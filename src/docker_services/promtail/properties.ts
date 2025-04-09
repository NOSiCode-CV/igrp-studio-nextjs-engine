import { VolumeFile } from '../../interfaces/types';
import { replaceTemplate } from '../../utils/helpers';
import { TEMPLATES } from '../../utils/constants';
import { PROMTAIL } from './index';

export function promtailProperties() {
  return {
    type: "object",
    properties: {
      image: { type: "string", required: true, default: "grafana/promtail:3.0.0" },
      container_name: { type: "string", required: false, default: "promtail" },
      command: {
        type: "array",
        default: [
          { instruction: '--config.expand-env=true' },
          { instruction: '--config.file=/etc/promtail/docker-config.yml' },
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
            internal: { type: "number", required: true, default: 9080 },
            external: { type: "number", required: true, default: 9080}
          }
        },
        default: [
          {
            internal: 9080,
            external: 9080
          }
        ]
      },
      hostname: { type: "string", required: false, default: 'promtail' },
      environments: {
        type: "array",
        default: [
          { key: "PROMTAIL_SERVICE_INTERNAL_PORT", value: "9080" },
          { key: "LOKI_SERVICE_INTERNAL_PORT", value: "3100" },
        ],
        items: {
          type: "object",
          properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
        }
      },
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
            name: { type: "string", required: true, default: "./monitoring/promtail/promtail-docker-config.yml" },
            path: { type: "string", required: true, default: "/etc/promtail/docker-config.yml" },
            driver: { type: "string", required: true, default: "none" }
          }
        },
        default: [
          { name: "./monitoring/promtail/promtail-docker-config.yml", path: "/etc/promtail/docker-config.yml", driver: "none" },
          { name: "/var/lib/docker/containers", path: "/var/lib/docker/containers:ro", driver: "none" },
          { name: "/var/run/docker.sock", path: "/var/run/docker.sock", driver: "none" },
        ]
      },
      labels: { type: "array", items: { type: "object", properties: { key: { type: "string", required: true, default: "type" }, value: { type: "string", required: true, default: "observability" } } } },
    }
  }
}

export function promtailVolumes(): Record<string, VolumeFile> {
  return {
    "/etc/promtail/docker-config.yml": {
      template: replaceTemplate(TEMPLATES.DOCKER_SERVICE, { name: PROMTAIL, volume: "promtail.yml" }),
      context: {}
    }
  }
}