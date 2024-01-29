# Backend Conatact Manager
This is a backend application built using Express.js and MongoDB. It includes functionality for user authentication and authorization using jsonWebtoken, and implements middleware for error handling. The application also defines models, controllers, and routes for RESTful API endpoints related to contacts management.

### Technologies Used
- Node.js
- Express.js
- MongoDB
- GITHUB 
- jsonWebtoken
- Middleware
- Error handling
- Models
- Controllers
- Routes
- POSTMAN
- Visual Studio Code

## Installation

#### Install the dependencies and devDependencies

```sh
npm i
```

#### Set up .env

```sh    
- [port] - "Assign a port number",
- [CONNECTION_STRING] - "Mongodb connection string",
- [ACCESS_TOKEN_SECRET] - "Secret"
```

#### Starting the Server

```sh    
- [npm run start ] - "node server.js",
- [npm run dev] - "nodemon server.js".
```

### HTTP Status Code

| Status Code | Message |
| ------ | ------ |
| 200 | Successful GET, PUT, or DELETE operation. |
| 201 | Successful POST operation. |
| 400 | Validation error or bad request. |
| 401 | Unauthorized access.|
| 403 | Forbidden access. |
| 404 | Resource not found. |


## Endpoints(POSTMAN)

##### REGISTER : POST

```sh
http://localhost:5002/api/users/register
* REGISTERATION : USERNAME : EMAIL : PASSWORD *
"WILL RECIEVE ID"
```

##### LOGIN : GET

```sh
http://localhost:5002/api/users/login
* LOGIN : EMAIL : PASSWORD *
"WILL RECIEVE JSONWEBTOKEN "
```

##### GETTING ALL CONTACTS : GET

```sh
http://localhost:5002/api/contacts 
*JSONWEBTOKEN REQUIRED*
Retrieve all contacts for the authenticated user
```

##### CREATE CONTACT : POST
```sh
http://localhost:5002/api/contacts 
*JSONWEBTOKEN REQUIRED*
Create a new contact for the authenticated user.
```

##### UPDATE CONTACT : DELETE
```sh
http://localhost:5002/api/contacts/:ID
*JSONWEBTOKEN REQUIRED*
Update a specific contact by ID for the authenticated user
```
##### DELETE CONTACT : DELETE
```sh
http://localhost:5002/api/contacts/:ID
*JSONWEBTOKEN REQUIRED*
Delete a specific contact by ID for the authenticated user
```
##### GET SPECIFIC CONTACT : GET
```sh
http://localhost:5002/api/contacts/:ID
*JSONWEBTOKEN REQUIRED*
Retrieve a specific contact by ID for the authenticated user
```


### Error Handling
This application implements middleware for error handling, which will return a JSON response with a relevant error message and HTTP status code for any encountered errors.

{
"username":"Aniket bhai",
"email":"aniketbhai@gmail.com",
"password":"123"
}