# Global Scheduling Application - Docker Deployment

## Overview
The Global Scheduling Application is a robust Spring application with a Java backend and an Angular frontend, designed for the Landon Hotel to manage and schedule reservations. This project focuses on enhancing the application's internationalization, adding multithreaded language translation, time zone adjustments, and currency exchange features. It also includes building a Docker image of the application for easy deployment and scaling.

## Features
- **Multithreaded Language Translation**: Supports English and French, meeting Canadian bilingual requirements.
- **Currency Conversion**: Displays prices in USD, CAD, and EUR.
- **Time Zone Conversion**: Converts and displays times between Eastern Time, Mountain Time, and Coordinated Universal Time (UTC).
- **Docker Integration**: Containerizes the application for streamlined deployment and scalability.

## Technologies Used
- **Java**: For backend development and multithreading.
- **Spring Boot**: For creating a stand-alone, production-grade application.
- **Angular**: For a responsive frontend.
- **Docker**: For creating a containerized version of the application.

## Getting Started

### Prerequisites
- JDK 1.8 or later
- Maven 3.2+
- Node.js and npm (for Angular)
- Docker

1. Navigate to the project directory:
cd GlobalSchedApp-DockerDeploy

2. Build the application:
mvn clean install

3. Run the Spring Boot application:
mvn spring-boot:run

4. Navigate to the frontend directory and install dependencies:
cd frontend
npm install

5. Serve the Angular application:
ng serve

Docker Deployment

1. Build the Docker image:
docker build -t globalschedapp .

2. Run the container:
docker run -d -p 8080:8080 globalschedapp

Usage
Language Translation: Access the application to view messages in English or French.
Currency Display: Check reservation prices displayed in multiple currencies.
Time Zone Conversion: View live presentation times across different time zones.
Contributing
Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
