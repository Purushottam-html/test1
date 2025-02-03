import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    userName:{
        type: String,
        
    },
    Email:{
        type: String,
        
    },
    PassWord:{
        type: String,

    },
    
})

export default User = mongoose.model('User' , userModel)