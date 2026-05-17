const Blog = require("../models/blogSchema");

/* ---------------- CREATE BLOG ---------------- */

const createBlog = async (req, res) => {
  try {
    const { title, category, content, status } = req.body;

    let featuredImage = "";

    // image upload
    if (req.file) {
      featuredImage = req.file.path;
    }

    const blog = await Blog.create({
      title,
      category,
      content,
      status,
      featuredImage,
    });

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully",
      blog,
    });
  } catch (error) {

    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBlog,
};