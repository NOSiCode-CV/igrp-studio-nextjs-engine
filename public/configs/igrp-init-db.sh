#!/bin/sh

set -e

echo "Initializing iGRP databases..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" <<-EOSQL
    -- Create main database if not exists
    SELECT 'CREATE DATABASE $IGRP_DB_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_DB_NAME')\gexec

    -- Create access management database if not exists
    SELECT 'CREATE DATABASE $IGRP_ACCESS_MANAGEMENT_DB_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_ACCESS_MANAGEMENT_DB_NAME')\gexec

    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$IGRP_ACCESS_MANAGEMENT_DB_USER') THEN
            CREATE USER $IGRP_ACCESS_MANAGEMENT_DB_USER WITH PASSWORD '$IGRP_ACCESS_MANAGEMENT_DB_PASSWORD';
        END IF;
    END
    \$\$;

    GRANT ALL PRIVILEGES ON DATABASE $IGRP_ACCESS_MANAGEMENT_DB_NAME TO $IGRP_ACCESS_MANAGEMENT_DB_USER;

    -- Create IAM database if not exists
    SELECT 'CREATE DATABASE $IGRP_IAM_DB_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_IAM_DB_NAME')\gexec

    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$IGRP_IAM_DB_USER') THEN
            CREATE USER $IGRP_IAM_DB_USER WITH PASSWORD '$IGRP_IAM_DB_PASSWORD';
        END IF;
    END
    \$\$;

    GRANT ALL PRIVILEGES ON DATABASE $IGRP_IAM_DB_NAME TO $IGRP_IAM_DB_USER;

    -- Create app logic database if not exists
    SELECT 'CREATE DATABASE $IGRP_APP_LOGIC_DB_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_APP_LOGIC_DB_NAME')\gexec

    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$IGRP_APP_LOGIC_DB_USER') THEN
            CREATE USER $IGRP_APP_LOGIC_DB_USER WITH PASSWORD '$IGRP_APP_LOGIC_DB_PASSWORD';
        END IF;
    END
    \$\$;

    GRANT ALL PRIVILEGES ON DATABASE $IGRP_APP_LOGIC_DB_NAME TO $IGRP_APP_LOGIC_DB_USER;
EOSQL

echo "Database initialization complete!"