import { JSONSchemaType, ValidateFunction } from 'ajv';
import {
  Dependency,
  DockerContainer,
  DockerServiceConfig, DockerServiceHealthcheck,
  DockerServiceInstruction, DockerServiceLogging, DockerServiceLoggingOptions,
  DockerServiceResourceLimit,
  DockerServiceResources, DockerServiceUserLimits, DockerServiceUserLimitsMemLock, Environment, EnvironmentFile,
  Expose, Host,
  Network, Port,
  Profile,
  ResourceLimits,
  Secret,
  Storage, Volume,
} from '../interfaces/types';
import { PATTERNS } from '../utils/constants';
import { ajvInstance } from '../utils/ajv-instance';

const dependencySchema: JSONSchemaType<Dependency> = {
  type: 'object',
  properties: {
    service: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The service must only contain letters and must not have spaces or special characters except underscore (_) and hyphen (-).'
    },
  },
  required: ['service'],
  additionalProperties: false,
};

const environmentSchema: JSONSchemaType<Environment> = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
      errorMessage: 'The key attribute must be a string.'
    },
    value: {
      type: 'string',
      errorMessage: 'The value attribute must be a string.'
    },
  },
  required: ['key', 'value'],
  additionalProperties: false,
};

const environmentFileSchema: JSONSchemaType<EnvironmentFile> = {
  type: 'object',
  properties: {
    file: {
      type: 'string',
      errorMessage: 'The file attribute must be a string.'
    }
  },
  required: ['file'],
  additionalProperties: false,
};

const portSchema: JSONSchemaType<Port> = {
  type: 'object',
  properties: {
    internal: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      errorMessage: 'The internal port must be a number that ranges from 1 to 65535.'
    },
    external: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      errorMessage: 'The external port must be a number that ranges from 1 to 65535.'
    },
    reference: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      nullable: true,
      errorMessage: 'The reference port, if provided, must be a number that ranges from 1 to 65535.'
    },
  },
  required: ['internal', 'external'],
  additionalProperties: false,
};

const volumeSchema: JSONSchemaType<Volume> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      errorMessage: 'The volume name must be a valid string..'
    },
    path: {
      type: 'string',
      errorMessage: 'The volume path must be a valid string..'
    },
    driver: {
      type: 'string',
      errorMessage: 'The volume driver must be a valid string.'
    },
  },
  required: ['name', 'path', 'driver'],
  additionalProperties: false,
};

const hostSchema: JSONSchemaType<Host> = {
  type: 'object',
  properties: {
    hostname: {
      type: 'string',
      pattern: PATTERNS.HOSTNAME_VALIDATION_PATTERN,
      errorMessage: "The 'hostname' attribute, if provided, must be a valid Docker service hostname, contains no special characters except dot (.) or colon (:)."
    },
    ip: {
      type: 'string',
      errorMessage: 'The external port must be a number that ranges from 1 to 65535.'
    },
  },
  required: ['hostname', 'ip'],
  additionalProperties: false,
};

const profileSchema: JSONSchemaType<Profile> = {
  type: 'object',
  properties: {
    profile: {
      type: 'string',
      errorMessage: 'The profile must be a valid string.'
    },
  },
  required: ['profile'],
  additionalProperties: false,
};

const secretSchema: JSONSchemaType<Secret> = {
  type: 'object',
  properties: {
    secret: {
      type: 'string',
      errorMessage: 'The secret must be a valid string.'
    },
  },
  required: ['secret'],
  additionalProperties: false,
};

const configSchema: JSONSchemaType<DockerServiceConfig> = {
  type: 'object',
  properties: {
    config: {
      type: 'string',
      errorMessage: 'The config must be a valid string.'
    },
  },
  required: ['config'],
  additionalProperties: false,
};

const instructionSchema: JSONSchemaType<DockerServiceInstruction> = {
  type: 'object',
  properties: {
    instruction: {
      type: 'string',
      errorMessage: 'The instruction must be a valid string.'
    },
  },
  required: ['instruction'],
  additionalProperties: false,
};

const networkSchema: JSONSchemaType<Network> = {
  type: 'object',
  properties: {
    network: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: 'The network, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
  },
  required: ['network'],
  additionalProperties: false,
};

const storageSchema: JSONSchemaType<Storage> = {
  type: 'object',
  properties: {
    storage: {
      type: 'string',
      errorMessage: 'The storage must be a valid string..'
    },
  },
  required: ['storage'],
  additionalProperties: false,
};

const exposeSchema: JSONSchemaType<Expose> = {
  type: 'object',
  properties: {
    port: {
      type: 'number',
      maximum: 65535,
      minimum: 1,
      errorMessage: 'The port must be a number that ranges from 1 to 65535.'
    },
  },
  required: ['port'],
  additionalProperties: false,
};

const limitSchema: JSONSchemaType<DockerServiceResourceLimit> = {
  type: 'object',
  properties: {
    cpus: {
      type: 'string',
      nullable: true,
      errorMessage: 'The cpus, if provided, must be a valid string.'
    },
    memory: {
      type: 'string',
      nullable: true,
      errorMessage: 'The memory, if provided, must be a valid string.'
    },
  },
  additionalProperties: false,
};

const resourceSchema: JSONSchemaType<DockerServiceResources> = {
  type: 'object',
  properties: {
    limits: {
      type: "object",
      anyOf: [
        limitSchema
      ],
      nullable: true,
      errorMessage: "The 'limits' field must be a valid Docker Service Resource Limits configuration.",
    },
    reservations: {
      type: "object",
      anyOf: [
        limitSchema
      ],
      nullable: true,
      errorMessage: "The 'reservations' field must be a valid Docker Service Resource Limits configuration.",
    },
  },
  errorMessage: "",
  additionalProperties: false
}

const deployConfigSchema: JSONSchemaType<ResourceLimits> = {
  type: 'object',
  properties: {
    replicas: {
      type: 'number',
      maximum: 100,
      minimum: 1,
      nullable: true,
      errorMessage: 'The replicas, if provided, must be a number that ranges from 1 to 100.'
    },
    restart_policy: {
      type: 'string',
      nullable: true,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      errorMessage: "The 'restart_policy' attribute, if provided, must be only 'always', 'no', 'on-failure' or 'unless-stopped'."
    },
    resources: {
      type: "object",
      nullable: true,
      anyOf: [
        resourceSchema
      ],
      errorMessage: "The 'resources' field, if provided, must be a valid Docker Service Resources configuration.",
    },
  },
  errorMessage: "",
  additionalProperties: false
}

const healthCheckConfigSchema: JSONSchemaType<DockerServiceHealthcheck> = {
  type: 'object',
  properties: {
    test: {
      type: 'array',
      nullable: true,
      items: instructionSchema,
      errorMessage: "The 'test' attribute must be a valid instruction array configuration."
    },
    interval: {
      type: 'string',
      nullable: true,
      errorMessage: 'The interval, if provided, must be a valid string.'
    },
    timeout: {
      type: 'string',
      nullable: true,
      errorMessage: 'The timeout, if provided, must be a valid string.'
    },
    retries: {
      type: 'number',
      maximum: 100,
      minimum: 1,
      nullable: true,
      errorMessage: 'The retries, if provided, must be a number that ranges from 1 to 100.'
    },
    start_period: {
      type: 'string',
      nullable: true,
      errorMessage: 'The start_period, if provided, must be a valid string.'
    },
  },
  errorMessage: "",
  additionalProperties: false
}

const loggingOptionsSchema: JSONSchemaType<DockerServiceLoggingOptions> = {
  type: 'object',
  properties: {
    max_size: {
      type: 'string',
      nullable: true,
      errorMessage: 'The max size, if provided, must be a valid string.'
    },
    max_file: {
      type: 'string',
      nullable: true,
      errorMessage: 'The max file, if provided, must be a valid string.'
    },
  },
  additionalProperties: false,
};

const loggingConfigSchema: JSONSchemaType<DockerServiceLogging> = {
  type: 'object',
  properties: {
    options: {
      type: "object",
      nullable: true,
      anyOf: [
        loggingOptionsSchema
      ],
      errorMessage: "The 'options' field, if provided, must be a valid Docker Service Logging Options configuration.",
    },
    driver: {
      type: 'string',
      nullable: true,
      enum: ['json-file', 'syslog', 'fluentd'],
      errorMessage: "The 'driver' attribute, if provided, must be only 'json-file', 'syslog' or 'fluentd'."
    },
  },
  errorMessage: "",
  additionalProperties: false
}

const memLockSchema: JSONSchemaType<DockerServiceUserLimitsMemLock> = {
  type: 'object',
  properties: {
    soft: {
      type: 'number',
      nullable: true,
      errorMessage: 'The soft attribute, if provided, must be a valid number.'
    },
    hard: {
      type: 'number',
      nullable: true,
      errorMessage: 'The hard attribute, if provided, must be a valid number.'
    },
  },
  additionalProperties: false,
};

const userLimitsConfigSchema: JSONSchemaType<DockerServiceUserLimits> = {
  type: 'object',
  properties: {
    memlock: {
      type: "object",
      anyOf: [
        memLockSchema
      ],
      errorMessage: "The 'options' field, if provided, must be a valid Docker Service Logging Options configuration.",
    },
  },
  required: ['memlock'],
  errorMessage: "",
  additionalProperties: false
}

export const dockerContainerConfigSchema: JSONSchemaType<DockerContainer> = {
  type: 'object',
  properties: {
    image: {
      type: 'string',
      errorMessage: "The 'image' attribute must be a valid string."
    },
    build: {
      type: 'string',
      pattern: PATTERNS.BUILD_PATH_VALIDATION_PATTERN,
      nullable: true,
      errorMessage: "The 'build' attribute, if provided, must be a valid Docker service build path, contains no special characters except dot (.), slash(/), hyphen (-) or underscore (_)."
    },
    container_name: {
      type: 'string',
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      nullable: true,
      errorMessage: 'The container name, if provided, must only contain letters and must not have spaces or special characters except underscore (_).'
    },
    restart: {
      type: 'string',
      nullable: true,
      enum: ['always', 'no', 'on-failure', 'unless-stopped'],
      errorMessage: "The 'restart' attribute must be only 'always', 'no', 'on-failure' or 'unless-stopped'."
    },
    dependsOn: {
      type: 'array',
      nullable: true,
      items: dependencySchema,
      errorMessage: "The 'dependsOn' attribute must be a valid dependency array configuration."
    },
    extends: {
      type: 'string',
      nullable: true,
      pattern: PATTERNS.DOCKER_SERVICE_VALIDATION_PATTERN,
      errorMessage: "The 'extends' attribute must only contain letters and must not have spaces or special characters except underscore (_) and hyphen (-)."
    },
    hostname: {
      type: 'string',
      nullable: true,
      pattern: PATTERNS.HOSTNAME_VALIDATION_PATTERN,
      errorMessage: "The 'hostname' attribute, if provided, must be a valid Docker service hostname, contains no special characters except dot (.) or colon (:)."
    },
    profiles: {
      type: 'array',
      nullable: true,
      items: profileSchema,
      errorMessage: "The 'profiles' attribute must be a valid profile array configuration."
    },
    ports: {
      type: 'array',
      nullable: true,
      items: portSchema,
      errorMessage: "The 'ports' attribute, if provided, must be a valid port array configuration."
    },
    expose: {
      type: 'array',
      nullable: true,
      items: exposeSchema,
      errorMessage: "The 'expose' attribute must be a valid expose array configuration."
    },
    networks: {
      type: 'array',
      nullable: true,
      items: networkSchema,
      errorMessage: "The 'networks' attribute, if provided, must be a valid network array configuration."
    },
    domainname: {
      type: 'string',
      nullable: true,
      pattern: PATTERNS.HOSTNAME_VALIDATION_PATTERN,
      errorMessage: "The 'domainname' attribute, if provided, must be a valid Docker service domain name, contains no special characters except dot (.) or colon (:)."
    },
    environments: {
      type: 'array',
      nullable: true,
      items: environmentSchema,
      errorMessage: "The 'environments' attribute must be a valid environments array configuration."
    },
    env_file: {
      type: 'array',
      nullable: true,
      items: environmentFileSchema,
      errorMessage: "The 'env_file' attribute must be a valid environment files array configuration."
    },
    extra_hosts: {
      type: 'array',
      items: hostSchema,
      nullable: true,
      errorMessage: "The extra hosts attribute must be a valid host array configuration."
    },
    labels: {
      type: 'array',
      nullable: true,
      items: environmentSchema,
      errorMessage: "The 'labels' attribute must be a valid labels array configuration."
    },
    volumes: {
      type: 'array',
      nullable: true,
      items: volumeSchema,
      errorMessage: "The 'volumes' attribute must be a valid volume array configuration."
    },
    tmpfs: {
      type: 'array',
      nullable: true,
      items: storageSchema,
      errorMessage: "The 'tmpfs' attribute must be a valid storage array configuration."
    },
    secret: {
      type: 'array',
      nullable: true,
      items: secretSchema,
      errorMessage: "The 'secrets' attribute must be a valid secret array configuration."
    },
    configs: {
      type: 'array',
      nullable: true,
      items: configSchema,
      errorMessage: "The 'configs' attribute must be a valid config array configuration."
    },
    command: {
      type: 'array',
      nullable: true,
      items: instructionSchema,
      errorMessage: "The 'commands' attribute must be a valid instruction array configuration."
    },
    entrypoint: {
      type: 'array',
      nullable: true,
      items: instructionSchema,
      errorMessage: "The 'entrypoint' attribute must be a valid instruction array configuration."
    },
    deploy: {
      type: "object",
      nullable: true,
      anyOf: [
        deployConfigSchema
      ],
      errorMessage: "The 'deploy' field, if provided, must be a valid Docker Service Deploy configuration.",
    },
    healthcheck: {
      type: "object",
      nullable: true,
      anyOf: [
        healthCheckConfigSchema
      ],
      errorMessage: "The 'healthcheck' field, if provided, must be a valid Docker Service Healthcheck configuration.",
    },
    logging: {
      type: "object",
      nullable: true,
      anyOf: [
        loggingConfigSchema
      ],
      errorMessage: "The 'logging' field, if provided, must be a valid Docker Service Logging configuration.",
    },
    ulimits: {
      type: "object",
      nullable: true,
      anyOf: [
        userLimitsConfigSchema
      ],
      errorMessage: "The 'ulimits' field, if provided, must be a valid Docker Service User Limits configuration.",
    },
    ipc: {
      type: 'string',
      nullable: true,
      errorMessage: 'The ipc, if provided, must be a valid string.'
    },
    pid: {
      type: 'string',
      nullable: true,
      errorMessage: 'The PID, if provided, must be a valid string.'
    },
    runtime: {
      type: 'string',
      nullable: true,
      errorMessage: 'The runtime, if provided, must be a valid string.'
    },
    init: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The init attribute, if provided, must be a valid boolean.'
    },
    stdin_open: {
      type: 'boolean',
      nullable: true,
      errorMessage: 'The STDIN attribute, if provided, must be a valid boolean.'
    },
    stop_signal: {
      type: 'string',
      nullable: true,
      errorMessage: 'The stop signal attribute, if provided, must be a valid string.'
    },
    shm_size: {
      type: 'string',
      nullable: true,
      errorMessage: 'The shared memory size attribute, if provided, must be a valid string.'
    },
  },
  required: ['image'],
  additionalProperties: false,
}

export const dockerContainerValidate: ValidateFunction<DockerContainer> =
  ajvInstance.compile<DockerContainer>(dockerContainerConfigSchema);
