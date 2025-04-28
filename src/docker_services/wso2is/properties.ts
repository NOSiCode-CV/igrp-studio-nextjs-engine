import { WSO2IS } from './index';

export function wso2isProperties() {
  return {
    image: { type: 'string', required: true, default: 'wso2/wso2is:7.1.0' },
    container_name: { type: 'string', required: false, default: 'wso2is' },
    restart: {
      type: 'string',
      required: false,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      default: 'unless-stopped',
    },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number', required: true, default: 9443 },
          external: { type: 'number', required: true, default: 9443 },
        },
      },
      default: [
        {
          internal: 9443,
          external: 9443,
        },
        {
          internal: 9763,
          external: 9763,
        }
      ],
    },
    hostname: { type: 'string', required: false, default: 'wso2is' },
    environments: {
      type: 'array',
      default: [
        { key: 'JAVA_OPTS', value: '-Xms512m -Xmx1024m' }
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
          name: { type: 'string', required: true, default: 'wso2is_repository' },
          path: { type: 'string', required: true, default: '/wso2carbon/wso2is-7.1.0/repository' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: 'wso2is_repository',
          path: '/wso2carbon/wso2is-7.1.0/repository',
          driver: 'local',
        },
      ],
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
            default: 'auth'
          },
          default: [
            {
              key: 'name',
              value: WSO2IS,
            },
            {
              key: 'type',
              value: 'auth'
            },
            {
              key: 'uuid',
              value: '{{uuid}}'
            }
          ]
        },
      },
    },
  };
}
