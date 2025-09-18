#!/bin/sh

set -e

echo "Initializing iGRP databases..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" <<-EOSQL
    -- Create main database if not exists
    SELECT 'CREATE DATABASE $IGRP_DATABASE_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_DATABASE_NAME')\gexec

    -- Create IAM database if not exists
    SELECT 'CREATE DATABASE $IGRP_IAM_DATABASE_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_IAM_DATABASE_NAME')\gexec

    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$IGRP_DATABASE_USER') THEN
            CREATE USER $IGRP_DATABASE_USER WITH PASSWORD '$IGRP_DATABASE_PASSWORD';
        END IF;
    END
    \$\$;

    GRANT ALL PRIVILEGES ON DATABASE $IGRP_IAM_DATABASE_NAME TO $IGRP_DATABASE_USER;

    -- Create process database if not exists
    SELECT 'CREATE DATABASE $IGRP_PROCESS_DATABASE_NAME'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$IGRP_PROCESS_DATABASE_NAME')\gexec

    DO \$\$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_user WHERE usename = '$IGRP_DATABASE_USER') THEN
            CREATE USER $IGRP_DATABASE_USER WITH PASSWORD '$IGRP_DATABASE_PASSWORD';
        END IF;
    END
    \$\$;

    GRANT ALL PRIVILEGES ON DATABASE $IGRP_IAM_DATABASE_NAME TO $IGRP_DATABASE_USER;

EOSQL

echo "Database initialization complete!"