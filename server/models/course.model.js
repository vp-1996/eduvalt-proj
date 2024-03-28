import mongoose, { Schema, trusted } from 'mongoose';
import Category from '../models/category.model'

const courseSchema = new mongoose.Schema({

    Category: {
        type: Schema.Types.ObjectId,
        ref: Category,
       // require: true
    },

    Description: {
        type: String,
       // require: true
    },

    Duration: {
        type: String,
       // require: true
    },

    Lessons: {
        type: Number
    },

    Image: {
        type: String
    }
})

export default mongoose.model('Course', courseSchema)



