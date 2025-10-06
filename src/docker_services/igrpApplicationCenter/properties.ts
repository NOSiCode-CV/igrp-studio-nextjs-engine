import { IGRP_APPLICATION_CENTER } from './index';

export function igrpApplicationCenterProperties() {
  return {
    image: {
      type: 'string',
      required: true,
      default: 'registry.nosi.cv/igrp/igrp-application-center:latest',
    },
    container_name: { type: 'string', required: false, default: '{{slug}}-igrp-application-center' },
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
    environments: {
      type: "array",
      items: {
        type: "object",
        properties: { key: { type: "string", required: true }, value: { type: "string", required: true } },
      },
      default: [
        {
          key: "KEYCLOAK_ISSUER",
          value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}/auth/realms/igrp",
        },
        {
          key: "KEYCLOAK_CLIENT_ID",
          value: "${IGRP_IAM_CLIENT_ID:-access-management}",
        },
        {
          key: "KEYCLOAK_CLIENT_SECRET",
          value: "${IGRP_IAM_CLIENT_SECRET:-**********}",
        },
        {
          key: "NEXTAUTH_URL",
          value: "http://${DOCKER_IP}:${NGINX_HTTP_PORT}",
        },
        {
          key: "NEXTAUTH_SECRET",
          value: "${NEXTAUTH_SECRET:-4oC9C+V7ZrANFWiGhcmyvu3GTlOfVDthdxUyn3V3Mtk=}",
        },
        {
          key: "IGRP_APP_MANAGER_API",
          value: `http://\${DOCKER_IP}:\${NGINX_HTTP_PORT}/gateway-api/{{slug}}-access-management`,
        },
        {
          key: "IGRP_APP_CODE",
          value: "APP_IGRP_CENTER",
        },
        {
          key: "IGRP_PREVIEW_MODE",
          value: "false",
        },
        {
          key: "IGRP_LOGIN_URL",
          value: "/login",
        },
        {
          key: "IGRP_LOGOUT_URL",
          value: "/logout",
        },
        {
          key: "IGRP_APP_NAME_DESCRIPTION",
          value: "IGRP",
        }
      ]
    },
    healthcheck: {
      type: "object",
      properties: {
        test: { type: "array", items: { type: "object", properties: { instruction: { type: "string", required: true } } } },
        interval: { type: "string", required: true },
        timeout: { type: "string", required: true },
        retries: { type: "number", required: true }
      },
      default: {
        test: [
          { instruction: 'CMD' },
          { instruction: 'curl' },
          { instruction: '-f' },
          { instruction: 'http://localhost:3000/api/health' },
        ],
        interval: '30s',
        timeout: '20s',
        retries: 3,
        start_period: '60s'
      }
    },
    extra_hosts: {
      type: "array",
      items: { type: "object", properties: { hostname: { type: "string", required: true }, ip: { type: "string", required: true } } },
      default: [
        {
          hostname: `{{slug}}-igrp`,
          ip: 'host-gateway'
        }
      ]
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
          value: IGRP_APPLICATION_CENTER,
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
