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
import elasticsearchModule, { ELASTICSEARCH } from './elasticsearch/index';
import kibanaModule, { KIBANA } from './kibana/index';
import logstashModule, { LOGSTASH } from './logstash/index';
import filebeatModule, { FILEBEAT } from './filebeat/index';
import metricbeatModule, { METRICBEAT } from './metricbeat/index';
import apmServerModule, { APMSERVER } from './apmserver/index';
import fleetServerModule, { FLEETSERVER } from './fleetserver/index';
import igrpUserManagementModule, { IGRP_USER_MANAGEMENT } from './igrpUserManagement/index';
import igrpAppLogicModule, { IGRP_APP_LOGIC } from './igrpAppLogic/index';
import igrpAppManagementModule, { IGRP_APP_MANAGEMENT } from './igrpAppManagement/index';
import igrpUiModule, { IGRP_UI } from './igrpUi/index';
import wso2isModule, { WSO2IS } from './wso2is/index';

export function registerAllServices() {

  // iGRP Platform
  register(IGRP_USER_MANAGEMENT, igrpUserManagementModule.register);
  register(IGRP_APP_MANAGEMENT, igrpAppManagementModule.register);
  register(IGRP_UI, igrpUiModule.register);
  register(IGRP_APP_LOGIC, igrpAppLogicModule.register);

  // Database
  register(POSTGRES, postgresModule.register);
  register(MYSQL, mysqlModule.register);
  register(ORACLE, oracleModule.register);

  // Authentication
  register(KEYCLOAK, keycloakModule.register);
  register(WSO2IS, wso2isModule.register);

  // File Management
  register(MINIO, minioModule.register);

  // Cache
  register(REDIS, redisModule.register);

  // Messaging
  register(RABBITMQ, rabbitMqModule.register);

  // Observability
  register(OPENTELEMETRY, opentelemetryModule.register);

  // Grafana Stack
  register(PROMETHEUS, prometheusModule.register);
  register(PROMTAIL, promtailModule.register);
  register(LOKI, lokiModule.register);
  register(TEMPO, tempoModule.register);
  register(GRAFANA, grafanaModule.register);

  // Elastic Stack
  register(ELASTICSEARCH, elasticsearchModule.register);
  register(KIBANA, kibanaModule.register);
  register(LOGSTASH, logstashModule.register);
  register(FILEBEAT, filebeatModule.register);
  register(METRICBEAT, metricbeatModule.register);
  register(APMSERVER, apmServerModule.register);
  register(FLEETSERVER, fleetServerModule.register);

}