# Cageflix
This project is for trivago Case Study . It is a full-stack web streaming platform prototype built with a Java Spring Boot backend, a React.js frontend, and a MySQL database.

# Project Structure
```
Cageflix/
├── backend/    # Spring Boot REST API
├── frontend/   # React.js(Vite) client app
└── README.md
└──database.sql
```

# Set-up instructions

## Prerequisites

- Java 17
- Maven
- React.js(Vite) (requires Node.js and npm or yarn to run)
- MySQL Server

## Database Setup

1. Run Your Database Management Software of choice and create a database called "cageflix".
   For example using the SQL Query "CREATE DATABASE cageflix";

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

1. Navigate to the backend folder in the terminal
```
   cd backend
```
2. Build the project:
```
   mvn clean install
```
3. Run the Spring Boot application:
```
   mvn spring-boot:run
          or
   java -jar target/cageflix-backend-0.0.1-SNAPSHOT.jar # Adjust filename if different
```

## Frontend Setup

1. Navigate to the frontend folder in the terminal
```
   cd frontend
``` 

1. Install dependencies:
```
   npm install
```
3. Start the server:
```
   npm run dev
```

## Additional Instruction

- When Clicked on Sign In button in the Nav Bar , use username as "**user**" and password as "**pass**".
- I added Tmdb api key in the application.properties file which i am aware is not good practice but it is viable for the demo purpose.



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
  

## Screenshots 


<br><br>

**Homepage**  
<p align="center">
  <img width="70%" alt="Homepage" src="https://github.com/user-attachments/assets/1c59ef0a-abbf-405a-ad56-621d1faa7a93" />
</p>

<br><br><br>

**Movies Page**  
<p align="center">
  <img width="70%" alt="Movies Page" src="https://github.com/user-attachments/assets/60d3c28f-bcd4-4c0a-8232-6298c9110655" />
</p>

<br><br><br>

**Log In**  
<p align="center">
  <img width="70%" alt="Log In" src="https://github.com/user-attachments/assets/232eea63-ca29-4673-a526-5461f775e4b2" />
</p>

<br><br><br>

**Shows Page**  
<p align="center">
  <img width="70%" alt="Shows Page" src="https://github.com/user-attachments/assets/027451a7-5804-4841-98ba-4eff77c7aaad" />
</p>

<br><br><br>

**Fuzzy Search**  
<p align="center">
  <img width="70%" alt="Fuzzy Search" src="https://github.com/user-attachments/assets/9cba5c22-738a-4640-9f6c-7c7e0aef6351" />
</p>

<br><br>


## Demo Video
**Link** - https://drive.google.com/drive/folders/1paR69FY4_wUQePp2wbSRGTJihbZTWp1i?usp=sharing


