# Go Dockerfile
FROM golang:1.20-alpine

# Set up working directory
WORKDIR /app

# Copy go.mod and go.sum files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go app
RUN go build -o hello-world-app .

# Expose port 8080
EXPOSE 8080

# Start the app
CMD ["./hello-world-app"]
