import mongoose from "mongoose";

const admin = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }
})

export default mongoose.model('admin',admin)