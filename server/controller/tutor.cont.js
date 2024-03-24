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



export const addTutor = (req, res) => {

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

export const getSingleTutor = async (req, res) => {

    try {
        const tutorID = req.params.tutor_id
        const tutorData = await tutorModel.findOne({ _id: tutorID })

        if (tutorData) {
            res.status(200).json({
                success: true,
                data: tutorData,
                message: "Tutor data fetched sucessfully"
            })
        }

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "error in fetching data"
        })
    }
}

/////////////Get All Tutors////////////////

export const getAllTutors = async (req, res) => {

    try {
        let data = await Tutor.find({})

        res.status(200).json({
            success: true,
            data: data,
            message: 'All fetched sucessfully'
        })

    }

    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error in fetching'
        })
    }
}

//////////////////// Edit //////////////////

export const updateTutor = (req, res) => {

    try {
        let imageStore = multer({ storage: storage }).single('Image')
        imageStore(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    message: err.message
                })
            } 

            let tutorID = req.params.tutor_id
            let { name, profession } = req.body
            let oldData = await tutorModel.findOne({ _id: tutorID })
            let pic = oldData.Image
            if (req?.file?.filename) {
                pic = req.file.filename
                if (fs.existsSync('./uploads/Images/' + oldData.Image)) {
                    fs.unlinkSync('./uploads/Images/' + oldData.Image)
                }
            }

            let updateTutor = await tutorModel.updateOne({ _id: tutorID }, { $set: { name: name, profession: profession, Image: pic } })

            if (updateTutor.acknowledged) {
                res.status(200).json({
                    message: 'Update Sucessfull',
                    path: 'http://localhost:5000/uploads/Images/'
                })
            }

        })

    }
    catch (error) {
        res.status(400).json({
            message: 'Error in Updating'
        })
    }

}

/////////////Delete Tutor//////////////////////
 
    export const deleteTutor=async(req,res)=>{

      try {
         let tutorID = req.params.tutor_id
         let tutor = await tutorModel.findOne({_id:tutorID}) 
         let deleteData = await tutorModel.deleteOne({_id:tutorID}) 

         if (deleteData.acknowledged) {
            if (fs.existsSync('./uploads/Images/' + tutor.Image)) {
                fs.unlinkSync('./uploads/Images/' + tutor.Image)
            }

            res.status(200).json({
                message: "Data Deleted Sucessfully"
            })
         }

      } 
      catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message
        })
      }

    } 
