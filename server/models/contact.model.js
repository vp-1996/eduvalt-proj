import mongoose from 'mongoose'

const contact = new mongoose.Schema({ 
 
  name:{
    type : String 
  },
  
  email:{
   type : String
  },

  phone:{
    type : Number
  },

  subject:{
    type: String
  },

  message:{
    type : String
  }

})

export default mongoose.model('contact',contact)