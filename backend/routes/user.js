const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  changeUserRole,
  deleteAccount,
  updateUser,
  blockUser,
  searchUsers,
} = require("../controllers/userController");

/* ---------------- GET ALL USERS ---------------- */
router.get("/users", getAllUsers);

/* ---------------- GET USER BY ID ---------------- */
router.get("/users/:userId", getUserById);

/* ---------------- UPDATE USER ---------------- */
router.put("/users/update", updateUser);

/* ---------------- CHANGE USER ROLE ---------------- */
router.put("/users/role", changeUserRole);

/* ---------------- BLOCK / UNBLOCK USER ---------------- */
router.put("/users/block", blockUser);

/* ---------------- DELETE USER ---------------- */
router.delete("/users/delete", deleteAccount);

/* ---------------- SEARCH USERS ---------------- */
router.get("/users/search", searchUsers);

module.exports = router;
