const express = require("express");
const { users } = require("../data/users.json");
const {
  getAllusers,
  getSingleUserById,
  deleteUser,
  updateUserByid,
  createNewUser,
  getSubscriptionDetailsById,
} = require("../controllers/user-controller");
const router = express.Router();

/*
 * Route: Users
 * Method: GET
 * Decription: Get all users
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllusers);
/*
 * Route: Users/:id
 * Method: GET
 * Decription: Get single user by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getSingleUserById);
/*
 * Route: users
 * Method: POST
 * Decription: Create new user
 * Access: Public
 * Parameters: None
 */
router.post("/", createNewUser);
/*
 * Route: users
 * Method: PUT
 * Decription: Updating user data
 * Access: Public
 * Parameters: None
 */
router.put("/:id", updateUserByid);
/*
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user by id
 * Acess: public
 * Parameters: id
 */
router.delete("/:id", deleteUser);

/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Description: Get all user subscription details
 * Access: Public
 * Parameters: id
 */
router.get("/subscription-details/:id", getSubscriptionDetailsById);

module.exports = router;
