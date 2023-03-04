#!/usr/bin/env bash

#################################
## Run application in DEV mode ##
#################################

started_at=$(date +"%s")

echo "-----> Provisioning containers"
docker compose --file docker-compose-dev.yaml up -d
echo ""

echo "----->Restart containers for migration and seeding"
docker restart exam-project-db-dev-1
docker restart exam-project-server-dev-1
echo "<----- Restart containers is done"


# Run Sequalize's create.
echo "-----> Running application create"
docker exec -it exam-project-server-dev-1 npx sequelize db:create
echo "<----- Create is done"

# Run Sequalize's migrations.
echo "-----> Running application migrations"
docker exec -it exam-project-server-dev-1 npx sequelize db:migrate
echo "<----- Migrate is done"

# Run Sequalize's seeds.
echo "-----> Running application seeds"
docker exec -it exam-project-server-dev-1 npx sequelize db:seed:all
echo "<----- Seeds created"

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
