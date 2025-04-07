import { register } from './index';
import postgresModule, { POSTGRES } from './postgres/index';
import mysqlModule, { MYSQL } from './mysql/index';
import oracleModule, { ORACLE } from './oracle/index';

export function registerAllServices() {
  register(POSTGRES, postgresModule.register);
  register(MYSQL, mysqlModule.register);
  register(ORACLE, oracleModule.register);
}