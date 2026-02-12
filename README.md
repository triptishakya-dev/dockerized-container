# Achiever - User Management API

A RESTful API built with Node.js, Express, Prisma ORM, and PostgreSQL, containerized with Docker for easy deployment and development.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Docker Setup](#docker-setup)

## 🎯 Overview

Achiever is a backend API service that provides user management functionality with role-based access control. The application is fully containerized using Docker and uses PostgreSQL as the database with Prisma ORM for type-safe database access.

## ✨ Features

- **User Management**: Create and retrieve users
- **Role-Based Access**: Support for USER, ADMIN, and MANAGER roles
- **Database ORM**: Type-safe database queries with Prisma
- **Containerized**: Fully dockerized application with Docker Compose
- **RESTful API**: Clean and intuitive API endpoints
- **PostgreSQL Database**: Robust and scalable database solution

## 🛠️ Technology Stack

- **Runtime**: Node.js 18 (Alpine)
- **Framework**: Express.js 5.2.1
- **Database**: PostgreSQL
- **ORM**: Prisma 6.19.2
- **Containerization**: Docker & Docker Compose
- **Environment Management**: dotenv

## 📁 Project Structure

```
achiever/
├── controllers/
│   └── userControllers.js    # User business logic
├── routes/
│   └── userroutes.js          # API route definitions
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── index.js                   # Application entry point
├── Dockerfile                 # Docker configuration
├── docker-compose.yaml        # Docker Compose setup
├── package.json               # Project dependencies
├── .env                       # Environment variables
└── README.md                  # Project documentation
```

## 📦 Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) and Docker Compose

## 🚀 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd achiever
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following:

```env
DATABASE_URL="postgresql://postgres:example1234@localhost:5432/achiever?schema=public"
```

## ⚙️ Configuration

The application uses environment variables for configuration. Key variables include:

- `DATABASE_URL`: PostgreSQL connection string
- Default port: `3000`

## 🏃 Running the Application

### Using Docker (Recommended)

1. **Start the PostgreSQL database**:
   ```bash
   docker-compose up -d
   ```

2. **Run Prisma migrations**:
   ```bash
   npx prisma migrate dev
   ```

3. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

4. **Start the application**:
   ```bash
   node index.js
   ```

### Using Docker for the entire stack

Build and run the application container:

```bash
docker build -t achiever-app .
docker run -p 3000:3000 --env-file .env achiever-app
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### Create User
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123",
  "role": "USER"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123",
    "role": "USER",
    "isActive": true,
    "createdAt": "2026-02-11T18:07:24.000Z",
    "updatedAt": "2026-02-11T18:07:24.000Z"
  }
}
```

#### Get All Users
```http
GET /api/users
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "password": "securepassword123",
      "role": "USER",
      "isActive": true,
      "createdAt": "2026-02-11T18:07:24.000Z",
      "updatedAt": "2026-02-11T18:07:24.000Z"
    }
  ]
}
```

## 🗄️ Database Schema

### User Model

| Field     | Type     | Description                    |
|-----------|----------|--------------------------------|
| id        | Int      | Auto-incrementing primary key  |
| name      | String   | User's full name               |
| email     | String   | Unique email address           |
| password  | String   | User password (should be hashed)|
| role      | String   | User role (USER/ADMIN/MANAGER) |
| isActive  | Boolean  | Account status (default: true) |
| createdAt | DateTime | Account creation timestamp     |
| updatedAt | DateTime | Last update timestamp          |

### Available Roles
- `USER` (default)
- `ADMIN`
- `MANAGER`

## 🐳 Docker Setup

### Dockerfile
The application uses a multi-stage Docker build:
- Base image: `node:18-alpine`
- Installs dependencies
- Generates Prisma Client
- Exposes port 3000

### Docker Compose
The `docker-compose.yaml` file sets up:
- PostgreSQL database on port 5432
- Default password: `example1234`
- Shared memory: 128MB

## 📝 Development

### Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name migration_name
```

View database in Prisma Studio:
```bash
npx prisma studio
```

### Useful Commands

```bash
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start the server
node index.js

# Start PostgreSQL with Docker
docker-compose up -d

# Stop PostgreSQL
docker-compose down
```

## 🔒 Security Notes

⚠️ **Important**: This is a development setup. For production:
- Implement password hashing (bcrypt, argon2)
- Add authentication middleware (JWT)
- Use environment-specific configurations
- Implement input validation
- Add rate limiting
- Use HTTPS
- Secure database credentials

## 📄 License

ISC

## 👤 Author

Your Name

---

**Happy Coding! 🚀**
