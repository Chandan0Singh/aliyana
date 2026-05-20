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
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).josn({
      success: false,
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { blogid } = req.body;

    console.log("blogid : ", blogid);

    if (!blogid) {
      res.status(400).json({
        success: false,
        message: "required blog id",
      });
    }

    const deleteBlog = await Blog.findByIdAndDelete(blogid);

    if (!deleteBlog) {
      res.status(404).json({
        success: false,
        message: "blog doen't found",
      });
    }

    res.status(200).json({
      success: true,
      deleteBlog: deleteBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, category, content, status } = req.body;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // update fields
    if (title) blog.title = title;
    if (category) blog.category = category;
    if (content) blog.content = content;
    if (status) blog.status = status;

    // featured image update
    if (req.file) {
      blog.featuredImage = req.file.path;
    }

    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const filterBlogs = async (req, res) => {
  try {
    const { search = "", category = "", status = "" } = req.query;

    let filter = {};

    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },

        {
          description: {
            $regex: search,
            $options: "i",
          },
        },

        {
          content: {
            $regex: search,
            $options: "i",
          },
        },

        {
          category: {
            $regex: search,
            $options: "i",
          },
        },

        {
          author: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    // Filter by category
    if (category && category !== "All Categories") {
      filter.category = category;
    }

    // Filter by status
    if (status && status !== "All Status") {
      filter.status = status;
    }

    const blogs = await Blog.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Find blog by ID
    const blog = await Blog.findById(id);

    // Check if blog exists
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    // Optional: Increase views automatically
    blog.views += 1;
    await blog.save();

    // Response
    res.status(200).json({
      success: true,
      data: blog,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  deleteBlog,
  updateBlog,
  filterBlogs,
  getSingleBlog
};
