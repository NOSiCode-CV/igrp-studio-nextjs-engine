import { IGRP_ACCESS_MANAGEMENT } from './index';

export function igrpAccessManagementProperties() {
  return {
    image: {
      type: 'string',
      required: true,
      default: 'registry.nosi.cv/igrp/access-management-api-native:latest',
    },
    container_name: { type: 'string', required: false, default: '{{slug}}-igrp-access-management' },
    restart: {
      type: 'string',
      required: false,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      default: 'unless-stopped',
    },
    ports: {
      type: 'array',
      required: false,
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 7981 },
          external: { type: 'number', required: true, default: 7981 },
        },
      },
      default: [
        {
          internal: 7981,
          external: 7981,
        },
      ],
    },
    extra_hosts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          hostname: { type: 'string', required: true },
          ip: { type: 'string', required: true },
        },
      },
      default: [
        {
          hostname: `{{slug}}-igrp`,
          ip: 'host-gateway',
        },
      ],
    },
    command: {
      type: 'array',
      items: { type: 'object', properties: { instruction: { type: 'string', required: true } } },
      default: [
        { instruction: '/app/access-management'},
        { instruction: '--spring.profiles.active=development'},
      ],
    },
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
        { key: 'SPRING_PROFILES_ACTIVE', value: 'development' },
        { key: 'SERVER_PORT', value: '8080' },
        { key: 'SPRING_APPLICATION_NAME', value: `{{slug}}-access-management` },
        { key: 'SPRING_JPA_HIBERNATE_DDL_AUTO', value: 'update' },
        { key: 'ENABLE_SWAGGER', value: 'true' },
        { key: 'JAVA_OPTS', value: '-Xmx512m -Xms256m -XX:+UseG1GC' },

        // Database configuration
        { key: 'POSTGRES_HOST', value: '${IGRP_LOCAL_DATABASE_HOSTNAME}' },
        { key: 'POSTGRES_DATABASE', value: '${IGRP_DATABASE_NAME}' },
        { key: 'POSTGRES_USER', value: '${IGRP_DATABASE_USER}' },
        { key: 'POSTGRES_PASSWORD', value: '${IGRP_DATABASE_PASSWORD}' },

        // Keycloak configuration
        { key: 'IGRP_KEYCLOAK_SERVER_URL', value: 'http://${IGRP_IAM_HOSTNAME}:8080/auth' },
        { key: 'IGRP_KEYCLOAK_REALM', value: '${IGRP_IAM_TENANT}' },
        { key: 'IGRP_KEYCLOAK_CLIENT_ID', value: '${IGRP_IAM_CLIENT_ID:-access-management}' },
        { key: 'IGRP_KEYCLOAK_CLIENT_SECRET', value: '${IGRP_IAM_CLIENT_SECRET:-**********}' },
        { key: 'IGRP_KEYCLOAK_GRANT_TYPE', value: 'client_credentials' },
        {
          key: 'AUTH_JWT_ISSUER',
          value: 'http://${DOCKER_IP}:${NGINX_HTTP_PORT}/auth/realms/igrp',
        },

        // Object storage configuration
        { key: 'IGRP_STORAGE_PROVIDER', value: 'minio' },
        { key: 'IGRP_STORAGE_ENDPOINT', value: '${IGRP_OBJECT_STORAGE_HOST}' },
        { key: 'IGRP_STORAGE_PORT', value: '${IGRP_OBJECT_STORAGE_PORT}' },
        { key: 'IGRP_STORAGE_SECURITY', value: '${IGRP_OBJECT_STORAGE_SECURITY}' },
        { key: 'IGRP_STORAGE_ACCESS_KEY', value: '${IGRP_OBJECT_STORAGE_USER}' },
        { key: 'IGRP_STORAGE_SECRET_KEY', value: '${IGRP_OBJECT_STORAGE_PASSWORD}' },
        { key: 'IGRP_STORAGE_BUCKET_NAME', value: '${IGRP_OBJECT_STORAGE_BUCKET_NAME}' },
        { key: 'IGRP_STORAGE_REGION', value: '${IGRP_OBJECT_STORAGE_REGION}' },
        { key: 'IGRP_STORAGE_PRESIGNED_URL_EXPIRATION_TIME', value: '300' },

        // Eureka discovery
        { key: 'EUREKA_CLIENT_ENABLED', value: 'true' },
        { key: 'SPRING_CLOUD_DISCOVERY_ENABLED', value: 'true' },
        { key: 'EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },
        { key: 'EUREKA_CLIENT_SERVICEURL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },
        { key: 'EUREKA_SERVICE_URL', value: '${EUREKA_SERVICE_URL}' },

        // Redis
        { key: 'SPRING_DATA_REDIS_HOST', value: `{{slug}}-redis` },
        { key: 'SPRING_DATA_REDIS_PASSWORD', value: 'jdflijd6542g4642yu4' },

        // Swagger configuration
        { key: 'SPRINGDOC_SWAGGER_UI_DISABLE_SWAGGER_DEFAULT_URL', value: 'true' },
        {
          key: 'SPRINGDOC_SWAGGER_UI_CONFIG_URL',
          value: `/gateway-api/{{slug}}-access-management/v3/api-docs/swagger-config`,
        },
        {
          key: 'SPRINGDOC_SWAGGER_UI_URL',
          value: `/gateway-api/{{slug}}-access-management/v3/api-docs`,
        },
        {
          key: 'OPENAPI_SERVER_API',
          value: `http://\${DOCKER_IP}:\${NGINX_HTTP_PORT}/gateway-api/{{slug}}-access-management`,
        },
      ],
    },
    networks: {
      type: 'array',
      default: [{ network: '{{slug}}-network' }],
      items: { type: 'object', properties: { network: { type: 'number', required: true } } },
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
          { instruction: 'CMD-SHELL' },
          { instruction: 'curl -f http://localhost:8080/actuator/health || exit 1' },
        ],
        interval: '30s',
        timeout: '20s',
        retries: 3,
        start_period: '60s'
      }
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
          value: IGRP_ACCESS_MANAGEMENT,
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
