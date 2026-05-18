const express = require("express");

const router = express.Router();

const { createBlog, getAllBlogs } = require("../controllers/blogController");

const upload = require("../middleware/upload");

/* ---------------- CREATE BLOG ---------------- */

router.post("/create", upload.single("featuredImage"), createBlog);

router.get("/", getAllBlogs);

module.exports = router;
