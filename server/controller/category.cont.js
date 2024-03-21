import categoryModel from "../models/category.model";
import Category from "../models/category.model";

export const addCategory = (req, res) => {

    try {
      const { name } = req.body;
      console.log(req.body);
      const data = new Category({ name: name });
  
      const saveData = data.save()
  
      //   const token = JWT.sign(
      //    {name},process.env.JWT_SECRET,{expiresIn:"2d"}
      //   )
  
      if (data) {
        res.status(200).json({
          success: true,
          //  token,
          data: data,
          message: 'Successfully Category Created !!!'
        })
      }
  
    }
  
    catch (error) {
        console.log(error);
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  }