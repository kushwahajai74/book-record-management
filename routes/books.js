const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const { UserModel, BookModel } = require("../models/index");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookByid,
} = require("../controllers/book-controller");
const router = express.Router();
/*
 * Route: /books
 * Method: GET
 * Description: get list of books
 * Acess: public
 * Parameters: NONE
 */
router.get("/", getAllBooks);
/*
 * Route: Books/:id
 * Method: GET
 * Decription: Get single book by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getSingleBookById);
/*
 * Route: /books/issued/books
 * Method: GET
 * Decription: Get single book by id
 * Access: Public
 * Parameters: id
 */
router.get("/issued/by-user", getAllIssuedBooks);
/*
 * Route: /books/
 * Method: POST
 * Decription: Create new book
 * Access: Public
 * Parameters: None
 */
router.post("/", addNewBook);
/*
 * Route: /books
 * Method: PUT
 * Decription: Updating book data by id
 * Access: Public
 * Parameters: None
 */
router.put("/:id", updateBookByid);

module.exports = router;
