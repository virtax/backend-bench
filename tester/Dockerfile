# Node.js Dockerfile
FROM node:18-alpine

# Install Apache Benchmark tool
RUN apk add --no-cache apache2-utils

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Start the app
CMD ["node", "tester.js"]
