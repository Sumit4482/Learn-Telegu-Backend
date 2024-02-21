# Learn Telegu Backend

## Overview
Telegu Backend is a Node.js and Express.js application designed to handle the backend logic and API endpoints for the Telegu language learning web application.

## Technologies Used
- Node.js: Backend runtime environment.
- Express.js: Minimalist web application framework for Node.js.
- MongoDB: NoSQL database for storing Telegu word data.

## Installation and Setup
1. Clone the repository: `[git clone <repository-url](https://github.com/Sumit4482/Learn-Telegu-Backend)>`
2. Navigate to the project directory: `cd telegu-backend`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## API Endpoints
- **GET /api/words/random**: Retrieve two random Telegu words with their English and Hindi translations and pronunciations.
- **GET /api/words**: Retrieve all Telegu words stored in the database.
- **GET /api/words/getbyid/:id**: Retrieve a Telegu word by its ID.
- **POST /api/words**: Add a new Telegu word to the database.
- **PUT /api/words/:id**: Update a Telegu word in the database.
- **DELETE /api/words/:id**: Delete a Telegu word from the database.
