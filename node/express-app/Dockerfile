# Node.js Dockerfile
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 3100
EXPOSE 3100

# Start the app
CMD ["node", "server.js"]
