import multer from 'multer'
import fs from 'fs';
import courseSchema from '../models/course.model';
import Category from '../models/category.model';

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

///////////////Create Course///////////////////
export const addCourse = (req, res) => {

    try {
        let imageStore = multer({ storage: storage }).single('Image')
        imageStore(req,res,(err)=>{
            if (err) {
                    res.status(400).json({
                     message:err.message
                   })
            }
     
           else{
             let {Category,Description,Lessons,Duration} = req.body;
           //  console.log(req.file);
            
             let image = ''
             if (req?.file?.filename) {
                 image= req.file.filename
             }
              console.log(image)
          
             let courseData = new courseSchema({
                 Category:Category,
                 Description:Description,
                 Lessons:Lessons,
                 Duration:Duration,
                 Image:image 
             }) 
              console.log(courseData);
         
             let saveCourse =courseData.save()
         
             if (courseData) {
                 res.status(201).json({
                   success: true,
                    data: courseData, 
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

