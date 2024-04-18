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

                let saveBlog = blogData.save()

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

   /////////// Delete////////////////////

   export const deleteBlog=async(req,res)=>{

   try {

    let blogId = req.params.blog_id

     let blogData = await blogModel.findOne({_id:blogId})
     let deleteBlog = await blogModel.deleteOne({_id:blogId})

     if (deleteBlog.acknowledged) {
        if (fs.existsSync('./uploads/Images/' + blogData.Image)) {
            fs.unlinkSync('./uploads/Images/' + blogData.Image)
        }

        res.status(200).json({
            message: "Blog Deleted Sucessfully"
        })
     }
    
   } catch (error) {
    res.status(400).json({
        message: error.message
    })
   }
   }

  //////////Get Single blog /////////////////

  export const getSingleBlog = async(req,res)=>{

    try {
        let blogID = req.params.blog_id

        let data = await blogModel.findOne({ _id:blogID }).populate('Category')

        if (data) {
            res.status(200).json({
                success: true,
                data: data,
                message: "Single Blog Data",
                path: 'http://localhost:5000/uploads/Images/'
            })
        }
    } 
 
 catch (error) {
    res.status(400).json({
        message: error.message
    })
 }

}

      //////////////Edit Blog/////////////


    export const updateBlog = (req,res)=>{

    try {
        //  const {category, description, lessons, duration } = req.body

        let imageStore = multer({ storage: storage }).single('Image')
        imageStore(req, res, async (err) => {       
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            }
            // console.log("file",req.body.file);

            let blogID = req.params.blog_id
            let { Category, Title, Comments} = req.body

            let oldData = await blogModel.findOne({ _id:blogID })
            let pic = oldData.Image
            if (req?.file?.filename) {
                pic = req.file.filename
                if (fs.existsSync('./uploads/Images/' + oldData.Image)) {
                    fs.unlinkSync('./uploads/Images/' + oldData.Image)
                }
            }

            let editBlog = await blogModel.updateOne({ _id: blogID }, { $set: { Category: Category, Title:Title, Comments: Comments, Image:pic} })

            if (editBlog.acknowledged) {
                res.status(200).json({
                    message: 'Update Sucessfull',
                    path: 'http://localhost:5000/uploads/Images/'
                })
            }

            else {
                res.status(400).json({
                    message: 'Error in Updating'
                })
            }

        })

    }

    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
    }
