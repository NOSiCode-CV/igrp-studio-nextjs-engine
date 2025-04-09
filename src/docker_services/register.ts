import { register } from './index';
import postgresModule, { POSTGRES } from './postgres/index';
import mysqlModule, { MYSQL } from './mysql/index';
import oracleModule, { ORACLE } from './oracle/index';
import keycloakModule, { KEYCLOAK } from './keycloak/index';
import minioModule, { MINIO } from './minio/index';
import redisModule, { REDIS } from './redis/index';
import rabbitMqModule, { RABBITMQ } from './rabbitmq/index';
import opentelemetryModule, { OPENTELEMETRY } from './opentelemetry/index';
import prometheusModule, { PROMETHEUS } from './prometheus/index';
import promtailModule, { PROMTAIL } from './promtail/index';
import lokiModule, { LOKI } from './loki/index';
import tempoModule, { TEMPO } from './tempo/index';
import grafanaModule, { GRAFANA } from './grafana/index';

export function registerAllServices() {

  // Database
  register(POSTGRES, postgresModule.register);
  register(MYSQL, mysqlModule.register);
  register(ORACLE, oracleModule.register);

  // Authentication
  register(KEYCLOAK, keycloakModule.register);

  // File Management
  register(MINIO, minioModule.register);

  // Cache
  register(REDIS, redisModule.register);

  // Messaging
  register(RABBITMQ, rabbitMqModule.register);

  // Observability
  register(OPENTELEMETRY, opentelemetryModule.register);
  register(PROMETHEUS, prometheusModule.register);
  register(PROMTAIL, promtailModule.register);
  register(LOKI, lokiModule.register);
  register(TEMPO, tempoModule.register);
  register(GRAFANA, grafanaModule.register);

}