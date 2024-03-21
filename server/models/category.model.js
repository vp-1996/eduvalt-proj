import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {
      type: String,
       required: true
       //unique: true,
    }
  });
  
  export default mongoose.model("Category", Category);