# book-record-management

This is a book record management API Backend for the management of records and books

# Routes and EndPoints

## /users

POST: Create a new user
GET: Get all list of users

## /user/{id}

GET: Get a user by id
PUT: update a user by id
DELETE: Delete a user by id(check if he/she still has an issued book) (is there any fine to be paid)

## /user/subscription-details/{id}

GET: Get user subsription details

1. Date of subscription
2. Valid till
3. Fine if any

## /books/{id}

GET: Get a book by id
POST: Update a book by id
