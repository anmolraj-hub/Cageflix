# Cageflix
This project is for trivago Case Study . It is a full-stack web streaming platform prototype built with a Java Spring Boot backend, a React.js frontend, and a MySQL database.

# Project Structure
Cageflix/
├── backend/    # Spring Boot REST API
├── frontend/   # React.js(Vite) client app
└── README.md
└──database.sql

# Set-up instructions

##Prerequisites

Java 17
Maven
React.js (requires Node.js and npm or yarn to run)
MySQL Server

## Database Setup

1. Run Your Database Management Software of choice and create a database called "cageflix".

2. for example using the SQL Query "CREATE DATABASE cageflix";

3. Import "cageflix_name_basics.sql","cag.sql" and ".sql" into the newly created database
3. Import `cageflix_name_basics.sql`](https://github.com/anmolraj-hub/Cageflix/blob/main/cageflix_name_basics.sql) , `cageflix_name_basics.sql`](https://github.com/anmolraj-hub/Cageflix/blob/main/cageflix_name_basics.sql), `cageflix_name_basics.sql`](https://github.com/anmolraj-hub/Cageflix/blob/main/cageflix_name_basics.sql) into your newly created database.

5. Configure database access credentials in backend/src/main/resources/application.properties:
   
## Backend Setup

1. cd backend
2. mvn clean install
3. mvn spring-boot:run


## Frontend Setup
1. npm install
2. npm run dev
Runs on http://localhost:5173 by default (Vite).

## Additional Instruction
When Clicked on Sign In button in the Nav Bar , use username as "user" and password as "pass".



# Why These Technologies?
SpringBoot(Java) - 
ReactJS - 
MySQL - 
