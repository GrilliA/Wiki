# Use the official Node.js image as a base image
FROM node:22

# Set the working directory
WORKDIR /app
# Copy the package.json and package-lock.json
COPY package*.json ./

RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 5000
