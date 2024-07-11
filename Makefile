# Include Environment Variables
include .env

project_start:
	docker compose up -d

project_stop:
	docker compose down
	
server_deploy:
	docker exec -it -u root ${PROJECT_NAME}-express /bin/bash

prisma_pull:
	docker exec -it -u root ${PROJECT_NAME}-express npx prisma db pull

prisma_generate:
	docker exec -it -u root ${PROJECT_NAME}-express npx prisma generate