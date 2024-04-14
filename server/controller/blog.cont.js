import blogModel from "../models/blog.model";
import multer from 'multer'
import fs from 'fs'
import categoryModel from "../models/category.model";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/Images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
    }
})
export const upload = multer({ storage: storage })

 ///////////////Create Blog/////////////////////

export const addBlog = (req, res) => {

    try {
        let imageStore = multer({ storage: storage }).single('Image')
        imageStore(req, res, (err) => {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            }

            else {
                let { Category, Title, Comments} = req.body;
                //  console.log(req.file);

                let image = ''
                if (req?.file?.filename) {
                    image = req.file.filename
                }
                console.log(image)

                let blogData = new blogModel({
                    Category: Category,
                    Title: Title,
                    Comments: Comments,
                    Image: image,
                })
                console.log(blogData);

                let saveCourse = blogData.save()

                if (blogData) {
                    res.status(201).json({
                        success: true,
                        data: blogData,
                        message: 'Successfully data inserted!',
                        path: 'http://localhost:5000/uploads/Images',

                    })
                }
            }

        })

    }

    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//////////Get All Blogs/////////////////

export const getAllBlogs=async(req,res)=>{

    try {
        let Data = await blogModel.find({}).populate('Category')
        res.status(200).json({
            Data: Data,
            message: "Fetched All Blogs Sucessfully",
            path: 'http://localhost:5000/uploads/Images'
        })

        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message
        })
    }
 
  }

  
