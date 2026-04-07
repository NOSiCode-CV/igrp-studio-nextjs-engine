export const normalizeHostname = (hostname: string): string => {
  return hostname.toLowerCase().replace(/[^a-z0-9]/g, '');
};

export const normalizeDatabase = (database: string) => {
  switch (database) {
    case "Postgresql":
      return "postgres"
    case "MySQL":
      return "mysql"
    case "Oracle":
      return "oracle"
    default:
      return database.toLowerCase()
  }
};

export const normalizeDatabaseImg = (database: string) => {
  switch (database) {
    case "Postgresql":
      return "postgres:latest"
    case "MySQL":
      return "mysql:latest"
    case "Oracle":
      return "oracle:latest"
    default:
      return `${database.toLowerCase()}:latest`
  }
};

export const normalizeDefaultPort = (database: string) => {
  switch (database) {
    case "Postgresql":
      return 5432
    case "MySQL":
      return 3306
    case "Oracle":
      return 1521
    default:
      return 5432
  }
};
