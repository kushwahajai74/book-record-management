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
PUT: Update a book by id

## /books/issued

GET: Get all issued books

## /books/issued/withFine

GET: Get all issued books with fine

# Subscription Types

Basic (3 months)
Standard (6 months)
Premium (12 months)

If the subscription date is 01/08/22 and Subscription type is standard than it is valid till 01/11/22

Fine is Rs.100 if you return the book after the due date.
Fine is Rs.200 if you have the book and your subscription expires.
