# Backend Bench

**Backend Bench** is a simple and fast benchmarking tool designed to compare the performance of the popular languages and web frameworks: **Go** with Gin, **Node.js** with Express and Fastify, **Python** with Django. It uses a custom tester service to simulate requests (using 'ab') and measure performance metrics.

## Table of Contents

- [Backend Bench](#backend-bench)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Benchmarking](#benchmarking)
  - [Contributing](#contributing)

## Requirements

- **Docker**: Make sure Docker is installed on your system.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/backend-bench.git
   cd backend-bench
   ```

2. To start all the services and the tests, run the following command:

```bash
docker-compose up --build --abort-on-container-exit
```

This will build and start the following services:
- **Go Gin app** (port `3000`)
- **Node.js Express app** (port `3100`)
- **Node.js Fastify app** (port `3101`)
- **Python Django app** (port `3200`)
- **Tester** (depends on all services)

You should see the logs from all services in your terminal.

## Benchmarking

The **Tester** service will automatically begin benchmarking the other services using Apache Benchmark (`ab`).

After each test run, the tester will output the results - **requests per second**. At the end you will see "Average results by Service".
Of course, it will depend on your computer's performance. But you can get an idea of ??the speed of different frameworks/languages ??and choose one to learn.

Example from my old Mac Book:
   ```bash
backend-bench-tester-1             | Average results by Service:
backend-bench-tester-1             | #1 Go Gin: 3483.62 requests per second
backend-bench-tester-1             | #2 Node Fastify: 1174.65 requests per second
backend-bench-tester-1             | #3 Node Express: 897.50 requests per second
backend-bench-tester-1             | #4 Python Django: 342.28 requests per second
   ```

## Contributing

Contributions are welcome! If you have suggestions or improvements (to add a new framework, for example), feel free to submit a pull request.