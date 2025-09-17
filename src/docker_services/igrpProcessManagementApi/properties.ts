import { IGRP_PROCESS_MANAGEMENT_API } from './index';
import { COMMON_FILES, DIRECTORIES } from '../../utils/constants';

export function igrpProcessManagementApiProperties() {
  return {
    image: { type: 'string', required: true, default: 'registry.nosi.cv/igrp/igrp-platform-process-management-jvm:latest' },
    container_name: { type: 'string', required: false, default: 'igrp-platform-process-management' },
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
    hostname: { type: 'string', required: false, default: 'igrp-platform-process-management' },
    networks: {
      type: 'array',
      default: [{ network: '{{slug}}-network' }],
      items: { type: 'object', properties: { network: { type: 'number', required: true } } },
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
        { key: 'SPRING_APPLICATION_NAME', value: 'process-management' },
        { key: 'SPRING_JPA_HIBERNATE_DDL_AUTO', value: 'update' },
        { key: 'ENABLE_SWAGGER', value: 'true' },
        { key: 'JAVA_OPTS', value: '-Xmx512m -Xms256m -XX:+UseG1GC' },

        // Database configuration
        { key: 'POSTGRES_HOST', value: '${IGRP_LOCAL_DATABASE_HOSTNAME}' },
        { key: 'POSTGRES_PORT', value: '5432' },
        { key: 'POSTGRES_DATABASE', value: 'igrp_process_db' },
        { key: 'POSTGRES_USER', value: '${IGRP_DATABASE_USER}' },
        { key: 'POSTGRES_PASSWORD', value: '${IGRP_DATABASE_PASSWORD}' },

        // Keycloak configuration
        { key: 'IGRP_KEYCLOAK_SERVER_URL', value: 'http://${IGRP_IAM_HOSTNAME}:8080/auth' },
        { key: 'IGRP_KEYCLOAK_REALM', value: '${IGRP_IAM_TENANT}' },
        { key: 'IGRP_KEYCLOAK_CLIENT_ID', value: '${IGRP_IAM_CLIENT_ID:-access-management}' },
        { key: 'IGRP_KEYCLOAK_CLIENT_SECRET', value: '${IGRP_IAM_CLIENT_SECRET:-**********}' },
        { key: 'IGRP_KEYCLOAK_GRANT_TYPE', value: 'client_credentials' },
        { key: 'AUTH_JWT_ISSUER', value: 'http://${DOCKER_IP}:${NGINX_HTTP_PORT}/auth/realms/igrp' },

        // Eureka discovery
        { key: 'SPRING_CLOUD_DISCOVERY_ENABLED', value: 'true' },
        { key: 'EUREKA_CLIENT_SERVICEURL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },
        { key: 'EUREKA_CLIENT_SERVICE_URL_DEFAULTZONE', value: '${EUREKA_SERVICE_URL}' },
        { key: 'EUREKA_SERVICE_URL', value: '${EUREKA_SERVICE_URL}' },

        // Swagger config
        { key: 'SPRINGDOC_SWAGGER_UI_DISABLE_SWAGGER_DEFAULT_URL', value: 'true' },
        { key: 'SPRINGDOC_SWAGGER_UI_CONFIG_URL', value: '/gateway-api/process-management/v3/api-docs/swagger-config' },
        { key: 'SPRINGDOC_SWAGGER_UI_URL', value: '/gateway-api/process-management/v3/api-docs' },

        // Mail config
        { key: 'SPRING_MAIL_HOST', value: '${SPRING_MAIL_HOST}' },
        { key: 'SPRING_MAIL_PORT', value: '${SPRING_MAIL_PORT}' },
        { key: 'SPRING_MAIL_USERNAME', value: '${SPRING_MAIL_USERNAME}' },
        { key: 'SPRING_MAIL_PASSWORD', value: '${SPRING_MAIL_PASSWORD}' },
        { key: 'SPRING_MAIL_SMTP_AUTH', value: '${SPRING_MAIL_SMTP_AUTH}' },
        { key: 'SPRING_MAIL_SMTP_STARTTLS_ENABLE', value: '${SPRING_MAIL_SMTP_STARTTLS_ENABLE}' },
        { key: 'IGRP_MAIL_DEFAULT_FROM', value: '${IGRP_MAIL_DEFAULT_FROM}' }
      ]
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
          value: IGRP_PROCESS_MANAGEMENT_API,
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