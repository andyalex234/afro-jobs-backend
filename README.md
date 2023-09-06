# Afro Jobs Backend

This is the backend for the Afro Jobs platform, a job/internship board website designed to connect job seekers with employers in the Afro community. The backend is built using Node.js, Express.js, MongoDB, and Mongoose.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Configuration](#configuration)
- [Deployment](#deployment)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed.
- MongoDB installed and running.
- Git for version control (optional).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/afro-jobs-backend.git
   ```

2. Install dependencies:

   ```sh
   cd afro-jobs-backend/src
   npm install
   ```

## Project Structure

The project follows a modularized structure for better organization and maintainability:

- `/src/controllers`: Contains route handlers for each resource.
- `/src/models`: Defines Mongoose models for Job, Internship, Company, Talent, Category, and User.
- `/src/routes`: Defines API routes for each resource and authentication routes.
- `/src/middlewares`: Includes authentication middleware for JWT.
- `/src/config`: Contains configuration files, including environment variables.
- `/src/server.js`: Sets up the Express.js server and routes.

## Features

- Job and Internship listing.
- User authentication using JWT.
- Management of Companies, Talents, and Categories.
- Secure and modularized codebase.

## Configuration

Before you start using the Afro Jobs Backend, you'll need to set up your environment variables. Copy the `.env.template` file and create a `.env` file with your local configuration. Here's how:

1. Navigate to the project's root directory.
2. Find the `.env.template` file and create a copy of it named `.env`.
3. Open the `.env` file in a text editor of your choice.
4. Customize the variables to match your local setup. For example:

```env
JWT_SECRET=my-secret-key-for-local-development
MONGO_URI=mongodb://localhost:27017/afro-jobs-database
# Add other configuration variables as needed
## Usage

1. Start the server:

   ```sh
   cd afro-jobs-backend/src
   npm start
   ```

2. Access the API at `http://localhost:3000` (or the configured port).

```sh
cd afro-jobs-backend/src
npm test
```

## Deployment

- Deploy the backend to your chosen hosting service (e.g., AWS, Heroku, or Azure).
- Set up environment variables for production in your hosting environment.
- Ensure MongoDB is configured for production use.
