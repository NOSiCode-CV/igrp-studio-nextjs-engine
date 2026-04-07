import { JSONSchemaType, ValidateFunction } from 'ajv';
import { Environment, Port, Volume } from '../interfaces/types';

export interface DockerContainerConfig {
  image: string;
  container_name?: string;
  restart?: string;
  ports?: Port[];
  environments?: Environment[];
  volumes?: Volume[];
  networks?: any[];
  depends_on?: string[];
}

export const dockerContainerConfigSchema = {
  type: 'object',
  properties: {
    image: { type: 'string' },
    container_name: { type: 'string' },
    restart: { type: 'string' },
    ports: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          internal: { type: 'number' },
          external: { type: 'number' }
        }
      }
    },
    environments: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string' },
          value: { type: 'string' }
        }
      }
    },
    volumes: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          path: { type: 'string' },
          driver: { type: 'string' }
        }
      }
    }
  }
};
