import { register } from './index';
import postgresModule, { POSTGRES } from './postgres/index';
import mysqlModule, { MYSQL } from './mysql/index';
import oracleModule, { ORACLE } from './oracle/index';
import keycloakModule, { KEYCLOAK } from './keycloak/index';
import minioModule, { MINIO } from './minio/index';
import redisModule, { REDIS } from './redis/index';
import rabbitMqModule, { RABBITMQ } from './rabbitmq/index';

export function registerAllServices() {
  register(POSTGRES, postgresModule.register);
  register(MYSQL, mysqlModule.register);
  register(ORACLE, oracleModule.register);
  register(KEYCLOAK, keycloakModule.register);
  register(MINIO, minioModule.register);
  register(REDIS, redisModule.register);
  register(RABBITMQ, rabbitMqModule.register);
}