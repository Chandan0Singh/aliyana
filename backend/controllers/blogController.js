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

const getAllBlogs = async(req, res) => {
  try{
    const blogs = await Blog.find().sort({ createdAt: -1});
    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    })

  } catch(error){
    res.status(500).josn({
      success: false,
      message: error.message
    })
  }

}

const deleteBlog = async(req, res)=>{
  try{
    const {blogid} = req.body;

    console.log("blogid : ", blogid)

    if(!blogid){
      res.status(400).json({
        success: false,
        message: "required blog id"
      })
    }

    const deleteBlog = await Blog.findByIdAndDelete(blogid);

    if(!deleteBlog){
      res.status(404).json({
        success: false,
        message: "blog doen't found"
      })
    }

    res.status(200).json({
      success: true,
      deleteBlog: deleteBlog
    })

  } catch(error){
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


module.exports = {
  createBlog,
  getAllBlogs,
  deleteBlog
};