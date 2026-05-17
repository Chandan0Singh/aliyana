const express = require("express");

const router = express.Router();

const { createBlog } = require("../controllers/blogController");

const upload = require("../middleware/upload");

/* ---------------- CREATE BLOG ---------------- */

router.post(
  "/create",
  upload.single("featuredImage"),
  createBlog
);

module.exports = router;