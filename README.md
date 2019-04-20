# [Title]

This NodeJS starter project is a collection of best practices. It enables the user to copy and use the source within this repo as a starting point when builiding NodeJS apis.

## Setup

1. Install dependencies `$ npm install`
2. Copy .env.example into .env and update values

## How to run

1. Run `$ npm start`

## Routes

| Method | Route          | Body                        |
| ------ | -------------- | --------------------------- |
| GET    | /api/users/    | -                           |
| GET    | /api/users/:id | -                           |
| POST   | /api/users/    | `{ "name": "New Name" }`    |
| PUT    | /api/users/:id | `{ "name": "Update Name" }` |
| DELETE | /api/users/:id | -                           |
