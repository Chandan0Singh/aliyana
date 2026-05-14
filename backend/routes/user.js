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
router.get("/:userId", getUserById);

/* ---------------- UPDATE USER ---------------- */
router.put("/update", updateUser);

/* ---------------- CHANGE USER ROLE ---------------- */
router.put("/role", changeUserRole);

/* ---------------- BLOCK / UNBLOCK USER ---------------- */
router.put("/block", blockUser);

/* ---------------- DELETE USER ---------------- */
router.delete("/delete", deleteAccount);

/* ---------------- SEARCH USERS ---------------- */
router.get("/search", searchUsers);

module.exports = router;
