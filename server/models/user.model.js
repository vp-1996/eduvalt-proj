import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true
  },

  number: {
    type: Number,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  },
  role: {
    type: Number,
    default: 0,
  }
});

export default mongoose.model('User', User)