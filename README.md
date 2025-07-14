# Cageflix
This project is for trivago Case Study . It is a full-stack web streaming platform prototype built with a Java Spring Boot backend, a React.js frontend, and a MySQL database.

# Project Structure
Cageflix/
```
├── backend/    # Spring Boot REST API
├── frontend/   # React.js(Vite) client app
└── README.md
└──database.sql
```

# Set-up instructions

##Prerequisites

Java 17
Maven
React.js (requires Node.js and npm or yarn to run)
MySQL Server

## Database Setup

1. Run Your Database Management Software of choice and create a database called "cageflix".

2. for example using the SQL Query "CREATE DATABASE cageflix";

3. Import "cageflix_name_basics.sql","cageflix_title_basics2.sql" and "cageflix_title_principals.sql" into the newly created database.

4. Configure database access credentials in backend/src/main/resources/application.properties:
   ```
   spring.datasource.url=jdbc:mysql://localhost:8080/cageflix_database
   spring.datasource.username=root
   spring.datasource.password=Anmol99@
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
   ```
   Note: Replace cageflix_database, your_mysql_username, and your_mysql_password with your actual database name and credentials.
   
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
SpringBoot(Java) - It is a powerful and flexible framework for building robust, production-ready applications. Choose for its convention-over-configuration approach, extensive ecosystem, and excellent performance.

ReactJS - It is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its component-based architecture promotes reusability and maintainability. 

MySQL - It is a popular open-source relational database management system. Selected it for its reliability, scalability, widespread community support. Its structured nature is well-suited for managing relational data like user information, movie details, and watchlists.

# Known Issues

1. Implemnted the fuzzy finding to an extent where it could search by movie title and genre.


# Future Enhancements

1. Advanced Search & Filtering: Add more sophisticated search capabilities (e.g., by director, release year) and filtering options.
2. Content Streaming Integration: Integrate with a video player and a content delivery network (CDN) for actual movie streaming.
3. Recommendation Engine: Develop a basic recommendation system based on user watch history or popular movies.   


