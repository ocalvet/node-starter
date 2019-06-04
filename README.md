# [Title]

This NodeJS starter project is a collection of best practices. It enables the user to copy and use the source within this repo as a starting point when builiding NodeJS apis.

## Setup

1. Install dependencies `$ npm install`
2. Copy .env.example into .env and update values

## How to build with babel

1. Run `$ npm build` this will transpile with Babel and output to build/Release


## How to run

1. Run `$ npm startd` this will run via babel-node on source
2. Run `$ npm start` this will run from the build/Release folder

## Routes

| Method | Route          | Body                        |
| ------ | -------------- | --------------------------- |
| GET    | /api/users/    | -                           |
| GET    | /api/users/:id | -                           |
| POST   | /api/users/    | `{ "name": "New Name" }`    |
| PUT    | /api/users/:id | `{ "name": "Update Name" }` |
| DELETE | /api/users/:id | -                           |

## Tests

1. To run test `$ npm test`

## Features

1. Separation of concerns within the app (See file structure)
2. Clean entry point (See server.js)
3. Use of environment for configuration
4. Sample tests
5. Sample custom middleware
6. Sample error handling
7. ES6 - Babel transpiling
