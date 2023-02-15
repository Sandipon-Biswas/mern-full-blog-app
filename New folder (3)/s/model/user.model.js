const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
        
    },
     password:{
        type:String,
        require:true,
        minlength:6
    },    
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required: true,
    }],
    
    });
    const User = mongoose.model("User",schema)

    module.exports=User;