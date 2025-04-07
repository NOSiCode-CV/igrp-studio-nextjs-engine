import { register } from './index';
import postgresModule, { POSTGRES } from './postgres/index';
import mysqlModule, { MYSQL } from './mysql/index';
import oracleModule, { ORACLE } from './oracle/index';
import keycloakModule, { KEYCLOAK } from './keycloak/index';

export function registerAllServices() {
  register(POSTGRES, postgresModule.register);
  register(MYSQL, mysqlModule.register);
  register(ORACLE, oracleModule.register);
  register(KEYCLOAK, keycloakModule.register)
}