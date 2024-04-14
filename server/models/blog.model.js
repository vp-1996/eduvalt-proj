import mongoose, { Schema } from 'mongoose'


let blogSchema = new mongoose.Schema({

    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },

    Title:{
        type: String
    },

    Comments:{
        type: Number
    },

    Image:{
        type: String
    }

})

export default mongoose.model('Blog',blogSchema)