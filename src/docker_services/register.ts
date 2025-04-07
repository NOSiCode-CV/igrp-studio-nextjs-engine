import { register } from './index';
import postgresModule, { POSTGRES } from './postgres/index';

export function registerAllServices() {
  register(POSTGRES, postgresModule.register);
}