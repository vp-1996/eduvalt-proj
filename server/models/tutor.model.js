import mongoose from "mongoose";

const Tutor = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    profession:{
        type:String,
        require:true
    },

    Image:{
        type:String,
        require:true
    }
})

export default mongoose.model('Tutor',Tutor)