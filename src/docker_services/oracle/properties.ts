export function oracleProperties() {
  return {
    image: { type: 'string', required: true, default: 'gvenzl/oracle-free:latest' },
    container_name: { type: 'string', required: false, default: 'oracle' },
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
          internal: { type: 'number', required: true, default: 1521 },
          external: { type: 'number', required: true, default: 1521 },
        },
      },
      default: [
        {
          internal: 1521,
          external: 1521,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'oracle' },
    environments: {
      type: 'array',
      default: [
        { key: 'APP_USER', value: '${APP_USER}' },
        { key: 'ORACLE_PASSWORD', value: '${ORACLE_PASSWORD}' },
        { key: 'APP_USER_PASSWORD', value: '${APP_USER_PASSWORD}' },
      ],
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true },
          value: { type: 'string', required: true },
        },
      },
    },
    env_file: { type: 'string', required: false, default: '.env' },
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
          name: { type: 'string', required: true, default: 'my-init.sql' },
          path: {
            type: 'string',
            required: true,
            default: '/container-entrypoint-initdb.d/my-init.sql:ro',
          },
          driver: { type: 'string', required: true, default: 'none' },
        },
      },
      default: [
        {
          name: 'my-init.sql',
          path: '/container-entrypoint-initdb.d/my-init.sql:ro',
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
          value: { type: 'string', required: true, default: 'database' },
        },
      },
      default: [
        {
          key: 'type',
          value: 'database',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
