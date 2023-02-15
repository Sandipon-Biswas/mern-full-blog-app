const Blog =require("../model/blog.model");
const User = require("../model/user.model");
const mongoose = require('mongoose');
const getAllBlog = async (req, res, next)=>{
    
        let blogs;
        try {
        blogs = await Blog.find();
        } catch (error) {
        console.log(error);
        }
        if (!blogs) {
        return res.status(404).json({ message: 'No blogs found' });
        }
        return res.status(200).json({ blogs });
        
}



const createBlogPost = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error finding user" });
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find user with the provided ID" });
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error saving blog post" });
    }

    return res.status(201).json({ blog });
};


    const updateBlog = async (req, res, next) => {
        const { title, description } = req.body;
        const blogId = req.params.id;
    
        let blog;
        try {
            blog = await Blog.findById(blogId);
        } catch (error) {
            console.log(error);
        }
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
    
        try {
            blog.title = title;
            blog.description = description;
            await blog.save();
        } catch (error) {
            console.log(error);
        }
    
        return res.status(200).json({ message: "Blog updated successfully" });
    };


    const getById = async (req,res,next) => {
            try {
                const blog = await Blog.findById(req.params.id);
                if (!blog) {
                return res.status(404).json({ message: 'Blog post not found' });
                }
                res.json(blog);
            } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
            }
    }

    const deleteBlog = async (req, res,next) => {
        try {
            const blog = await Blog.findById(req.params.id).populate("user");
            await blog.user.blogs.pull(blog);
            await blog.user.save();
            if (!blog) {
            return res.status(404).json({ message: 'Blog post not found' });
            }
            await blog.remove();
            res.json({ message: 'Blog post removed' });
        } catch (err) {
            console.error(err.message);
            next(err);
        }
};
const getUserById = async (req, res, next) => {
    const userId = req.params.id;
    let userBlogs;
    try {
      userBlogs = await User.findById(userId).populate('blogs');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    if (!userBlogs) return res.status(404).json({ msg: 'User not found' });
    return res.status(200).json({ blogs: userBlogs });
  };
module.exports={getAllBlog,createBlogPost,updateBlog,getById,deleteBlog,getUserById}