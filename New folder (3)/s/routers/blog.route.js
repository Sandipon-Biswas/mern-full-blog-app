const express =require("express");
const blogRouter =express.Router();
const { getAllBlog, createBlogPost, updateBlog, getById, deleteBlog, getUserById } = require("../controlers/blog.cntroler");


blogRouter.get("/",getAllBlog );
blogRouter.post("/add",createBlogPost );
blogRouter.put("/update/:id", updateBlog );
blogRouter.get("/:id", getById );
blogRouter.delete("/:id", deleteBlog );
blogRouter.get("/user/:id", getUserById  );
module.exports=blogRouter;