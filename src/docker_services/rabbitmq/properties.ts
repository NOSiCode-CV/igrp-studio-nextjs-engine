export function rabbitmqProperties() {
  return {
    image: { type: 'string', required: true, default: 'rabbitmq:4.1.0-rc.1' },
    container_name: { type: 'string', required: false, default: 'rabbitmq' },
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
          internal: { type: 'number', required: true, default: 5672 },
          external: { type: 'number', required: true, default: 5672 },
        },
      },
      default: [
        {
          internal: 5672,
          external: 5672,
        },
        {
          internal: 15672,
          external: 15672,
        },
      ],
    },
    hostname: { type: 'string', required: false, default: 'rabbitmq' },
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
        { key: 'RABBITMQ_DEFAULT_USER', value: 'admin' },
        { key: 'RABBITMQ_DEFAULT_PASS', value: 'password' },
      ],
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
          name: { type: 'string', required: true, default: 'rabbitmq_data' },
          path: { type: 'string', required: true, default: '/var/lib/rabbitmq' },
          driver: { type: 'string', required: true, default: 'local' },
        },
      },
      default: [
        {
          name: 'rabbitmq_data',
          path: '/var/lib/rabbitmq',
          driver: 'local',
        },
      ],
    },
    labels: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string', required: true, default: 'type' },
          value: { type: 'string', required: true, default: 'messaging' },
        },
      },
      default: [
        {
          key: 'type',
          value: 'messaging',
        },
        {
          key: 'uuid',
          value: '{{uuid}}',
        },
      ],
    },
  };
}
