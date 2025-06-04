# tasks-api

## Introduction
This is a simple RESTful API for managing tasks, built using Test-Driven Development (TDD) and Behavior-Driven Development (BDD) methodologies.  
It allows you to create tasks through an HTTP endpoint.  
The project is designed as a learning resource, and for this reason, the database is set to run on localhost

### BDD user story implementation
This section describes how the API implements a user story using Behavior-Driven Development (BDD) principles.

**Given** the user provides a valid JSON  
**When** a POST request is made to /tasks  
**Then** the system should respond with status 201 (Created)  
**And** the response body should contain the ID and saved data (title, description and completed)

## Configuration

### Run locally

Create a `.env` in the root folder with the next values:

```
PORT=3000
HOSTNAME=localhost
DATABASE_NAME=database
```

To run the application, first install the npm packages, after that execute the next command:

```bash
npm i
npm run start:dev
```

To run the tests, execute the next command:
```bash
npm run test
```

## Endpoints

### POST /create

**Description:** This endpoint is used for create tasks. It expects the task's details (id, title, description and completed) in the request body. Upon successful creation, it returns a JSON object with the task details.

