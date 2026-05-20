const express = require("express");

const router = express.Router();

const { createBlog, getAllBlogs, deleteBlog, filterBlogs, getSingleBlog } = require("../controllers/blogController");

const upload = require("../middleware/upload");

/* ---------------- CREATE BLOG ---------------- */

router.post("/create", upload.single("featuredImage"), createBlog);

router.get("/", getAllBlogs);

router.get("/:id", getSingleBlog);

router.get("/search", filterBlogs);

router.delete("/delete", deleteBlog);

module.exports = router;
