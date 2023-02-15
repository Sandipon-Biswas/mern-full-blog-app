const express =require('express');
const cors =require('cors');
require('./config/db')
const app =express();
const userRouter =require('./routers/user.router');
const blogRouter = require('./routers/blog.route');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter )
app.use('/api/blogs', blogRouter )
app.get('/',(req,res)=>{
    res.send("hellow world")
});


app.use((req,res,next)=>{
    res.status(404).json({
        "message":"route not found"
    })
});

app.use((err,req,res,next)=>{
    res.status(500).json({
        "message":"something broke"
    })
});


module.exports=app;