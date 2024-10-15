# Todo API (Nest.js)
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

This is a Todo API built with NestJS and TypeORM, designed to manage a simple Todo list. The API includes CRUD operations for managing Todo items, and it is fully documented with Swagger.

## Features
- Create, Read, Update, Delete (CRUD) operations for Todos.
- Data validation using DTOs and class-validator.
- Tested with Jest.
- Swagger documentation for the API.
- Supports MySQL 

## Getting Started
### Prerequisites
Before running this project, ensure that you have the following installed:
- Node.js 
- npm 
- MySQL (or any preferred SQL database)
- NestJS CLI (optional but recommended)

### Installation
1. Clone the repository `git clone https://github.com/your-username/todo-api.git`
2. Access the respository in your terminal `cd todo-api`
3. Install dependencies using the command `npm install` or `yarn` if you're using yarn as your package manager.
4. Create a `.env` file in the root of the project.
5. Add the following database configuration to the `.env` file:
   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=your-username
   DB_PASSWORD=your-password
   DB_DATABASE=todo_db
   ```
6. Ensure that the database (todo_db) exists in MySQL or create it.
7. run the application using the command `npm run start` for npm or `yarn start` if you're using yarn as our package manager.

8. The app will be running at `http://localhost:3000`.

## API Endpoints

| Method|Endpoint|Description|
|-|-|-|
|GET|/todos| Retrieve all Todos|
|GET|/todos/:id| Retrieve Todo by ID|
|POST|/todos| Create new Todo|
|PUT|/todos/:id| Update a Todo by ID|
|DELETE|/todos/:id| Delete a Todo by ID|

## Example API Request

```
POST /todos
Content-Type: application/json

{
  "title": "Learn NestJS",
  "description": "Complete the NestJS tutorial",
  "isCompleted": false
}
```
## Running Tests
The project includes unit tests using Jest. 
Run the command `npm run test` or `yarn test` if you are using yarn as your package manager.

## API Documentation
The API is documented using Swagger. Once the app is running, you can access the Swagger UI at; `http://localhost:3000/api/docs`

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
