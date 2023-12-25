# Use OpenJDK as the base image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the image
WORKDIR /app

# Copy the JAR file into the image
COPY target/D387_sample_code-0.0.2-SNAPSHOT.jar /app/app.jar

# Expose the port the application runs on
EXPOSE 8080

# Set the command to run on container startup
ENTRYPOINT ["java","-jar","/app/app.jar"]
