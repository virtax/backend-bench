# Backend Bench

**Backend Bench** is a simple and fast benchmarking tool designed to compare the performance of the popular languages and web frameworks: **Node.js** with Express, **Go** with Gin, and **Python** with Django. It uses a custom tester service to simulate requests (using 'ab') and measure performance metrics.

## Table of Contents

- [Backend Bench](#backend-bench)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Services](#services)
    - [1. Node.js (Express)](#1-nodejs-express)
    - [2. Go (Gin)](#2-go-gin)
    - [3. Python (Django)](#3-python-django)
    - [4. Tester](#4-tester)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Benchmarking](#benchmarking)
  - [Contributing](#contributing)

## Project Overview

This project demonstrates how to build and benchmark APIs using three different backend frameworks and languages:
- **Node.js** using **Express**
- **Go** using **Gin**
- **Python** using **Django**

The project also includes a custom **Tester** service that simulates requests to these services using Apache Benchmark (`ab`) and collects performance data, such as requests per second.

## Services

### 1. Node.js (Express)

A simple **Node.js** application built using the **Express** framework. It listens on port `3000` and responds with "Hello, World!" on the root (`/`) endpoint.

- **Directory**: `./node-express-app`
- **Port**: `3000`

### 2. Go (Gin)

A lightweight, high-performance **Go** application using the **Gin** web framework. It listens on port `8080` and responds with "Hello, World!" on the root (`/`) endpoint.

- **Directory**: `./go-gin-app`
- **Port**: `8080`

### 3. Python (Django)

A **Django** web application that listens on port `8000` and responds with "Hello, World!" on the root (`/`) endpoint.

- **Directory**: `./python-django-app`
- **Port**: `8000`

### 4. Tester

The **Tester** service is a custom benchmarking tool built in **Node.js**. It uses Apache Benchmark (`ab`) to send concurrent requests to each of the services (Node.js, Go, Django) and measures performance metrics such as **requests per second**.

- **Directory**: `./tester`
- **Purpose**: Simulate load and collect performance metrics.

## Requirements

- **Docker**: Make sure Docker is installed on your system.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/backend-bench.git
   cd backend-bench
   ```

2. Make sure Docker and Docker Compose are installed.

## Usage

To start all the services, run the following command:

```bash
docker-compose up --build --abort-on-container-exit
```

This will build and start the following services:
- **Node.js** (port `3000`)
- **Go (Gin)** (port `8080`)
- **Python (Django)** (port `8000`)
- **Tester** (depends on all services)

You should see the logs from all services in your terminal.

## Benchmarking

The **Tester** service will automatically begin benchmarking the other services using Apache Benchmark (`ab`). It will make requests to the following endpoints:

- **Node.js**: `http://node-express-app:3000/`
- **Go (Gin)**: `http://go-gin-app:8080/`
- **Python (Django)**: `http://python-django-app:8000/`

After each test run, the tester will output the results - **requests per second**. At the end you will see "Average results by Service".
Of course, it will depend on your computer's performance. But you can get an idea of ??the speed of different frameworks/languages ??and choose one to learn.

Example from my old Mac Book:
   ```bash
backend-bench-tester-1             | Average results by Service:
backend-bench-tester-1             | #1 Go Gin: 4336.90 requests per second
backend-bench-tester-1             | #2 Node.js Express: 1097.29 requests per second
backend-bench-tester-1             | #3 Python Django: 378.48 requests per second
   ```

## Contributing

Contributions are welcome! If you have suggestions or improvements (to add a new framework, for example), feel free to submit a pull request.