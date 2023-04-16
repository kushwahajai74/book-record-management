const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const { UserModel, BookModel } = require("../models/index");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
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
 * Decription: Create new user
 * Access: Public
 * Parameters: None
 */
router.post("/", (req, res) => {
  const { id, name, author, genre, price, publisher } = req.body;
  const book = books.find((each) => each.id === id);
  if (book) {
    return res.status(404).json({
      success: false,
      message: "book exists with this id",
    });
  }
  books.push({
    id,
    name,
    author,
    genre,
    price,
    publisher,
  });
  return res.status(200).json({
    success: true,
    data: books,
  });
});
/*
 * Route: /books
 * Method: PUT
 * Decription: Updating book data by id
 * Access: Public
 * Parameters: None
 */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const book = books.find((each) => each.id === id);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "Book does not exist with this id",
    });
  }
  const updatedBook = books.map((each) => {
    if (each.id === id) {
      return {
        ...each,
        ...data,
      };
    }
    return each;
  });

  return res.status(200).json({
    success: true,
    data: updatedBook,
  });
});

module.exports = router;
