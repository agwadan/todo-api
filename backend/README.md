# Todo API (Nest.js)
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

This is a Todo API built with NestJS designed to manage a simple Todo list. The API includes CRUD operations for managing Todo items, and it is fully documented with Swagger.

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
7. Run the application using the command `npm run start` for npm or `yarn start` if you're using yarn as our package manager.

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

## Screenshots
1. Adding a task

|Request|Response|
|-|-|
|![image](https://github.com/user-attachments/assets/64fd416e-5156-4062-b0fe-12f021d2eb32)|![image](https://github.com/user-attachments/assets/711af8ee-e848-472f-9d9b-d729929e7b76)|

2. Get all todos
 
|Request|Response|
|-|-|
|![image](https://github.com/user-attachments/assets/ffdf29d7-d663-456c-8c88-0a188e5da6c1)|![image](https://github.com/user-attachments/assets/717deb85-f5c3-4e92-897d-6fe209ff8f01)|

3. Get todo by ID

|Request|Response|
|-|-|
|![image](https://github.com/user-attachments/assets/702b359f-4b14-4789-9616-fc8efef0139e)|![image](https://github.com/user-attachments/assets/9756235e-6a8e-4dca-8d3a-ecc4138c1746)|

4. Update todo

|Request|Response|
|-|-|
|![image](https://github.com/user-attachments/assets/2d94ff4d-9ba8-406b-8ac1-6797e75e7dea)|![image](https://github.com/user-attachments/assets/60c4ac11-139d-47e9-afb8-ed206d7c1449)|

5. Delete todo

|Request|Response|
|-|-|
|![image](https://github.com/user-attachments/assets/6f49dd04-b98c-4365-b11e-119b4449dfd9)|![image](https://github.com/user-attachments/assets/a9c82e1d-3fcb-44f4-b342-05f96df7a113)|







## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
