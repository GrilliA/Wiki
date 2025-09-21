FROM node:22

# Set the working directory
WORKDIR /web

# Copy package.json and package-lock.json separately
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 3000
