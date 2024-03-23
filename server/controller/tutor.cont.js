 import tutorModel from "../models/tutor.model";
 import Tutor from '../models/tutor.model';
 import multer from "multer";
 import fs from 'fs'

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



 export const addTutor=(req,res)=>{

    try {
        let imageStore = multer({ storage: storage }).single('Image')
        imageStore(req, res, (err) => {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            }

            else {
                let { name, profession } = req.body;
                //  console.log(req.file);

                let image = ''
                if (req?.file?.filename) {
                    image = req.file.filename
                }
                console.log(image)

                let tutorData = new tutorModel({
                    name: name,
                    profession: profession,
                    Image: image
                })
                console.log(tutorData);

                let saveData = tutorData.save()

                if (tutorData) {
                    res.status(201).json({
                        success: true,
                        data: tutorData,
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

 /////////////// Get Single/////////////

 export const getSingleTutor=(req,res)=>{

    

 }