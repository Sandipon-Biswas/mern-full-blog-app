
const User =require("../model/user.model")
const bcrypt = require('bcrypt');
const getAlluser =async (req,res,next)=>{
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error)
    }
    if (!users) {
        return res.status(404).json({message:"no user"})
    }
    return res.status(200).json({users})
};

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        console.log(error);
    }
    if (existingUser) {
        return res.status(400).json({ message: "user already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs:[]
    });

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({ user });
};
const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email });
    } catch (error) {
      console.log(error);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Email or password is incorrect" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Email or password is incorrect" });
    }
    return res.status(200).json({ existingUser });
  };





module.exports={getAlluser,signup,login}