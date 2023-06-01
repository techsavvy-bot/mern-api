const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  userPurchaseList,
} = require("../controllers/user");
const { isSignIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignIn, isAuthenticated, updateUser);

router.get("/orders/user/:userId", isSignIn, isAuthenticated, userPurchaseList);

// router.get("/users", users); to get all users
module.exports = router;
