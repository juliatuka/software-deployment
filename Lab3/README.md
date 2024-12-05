# Lab3: WordPress Deployment with Docker 

This project demostrated the depolyment of a WordPress application using Docker. 

### Key Notes

- Make sure that Docker and Docker Compose are installed on your system before starting. 
- Ports: WordPress runs on port 8080, and MariaDB is accessible on port 3306.

## Part 1: Deploy WordPress with Pre-build Images

We used official Docker images for WordPress and MySQL to setup the WordPress application. The database and application are connected via Docker Compose.

1. Create a docker-compose.yml file with the two services `wordpress` and `mysql`/`db`.

2. Navigate to `cd Lab3/Teil1` and enter the command 
```
docker-compose up -d
```

3. After the container has started you can open the browser and navigate to: http://localhost:8080 and follow the WordPress setup to complete the installation. 

4. To stop the containers and remove the volumes use 
```
docker-compose down --volumes
```

## Part 2: Build and Deploy Custom WordPress and MariaDB Images

In this part, we created custom Docker images for WordPress and MariaDB based on Debian. Both containers are built using Dockerfiles and deployes via Docker Compose. 

1. Created the dockerfile for both WordPress and MariaDB. 

2. After that created the docker-compose.yml file for deployment. 

3. Navigating to `cd Lab3/Teil2` to build the images with
```
docker-compose build
```

4. To start the comtainers use 
```
docker-compose up -d
```

5. Now you can access the WordPress Application again at http://localhost:8080 and complete the setup by providing the database credentials configured in the Dockerfiles:

- Database Name: `wordpress_db`
- Username: `userdb`
- Password: `passworddb`
- Database Host: `db:3306` 

6. To stop the containers and remove volums use: 
```
docker-compose down --volumes
```
