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
        imageStore(req, res, (err) => {
            if (err) {
                res.status(400).json({
                    message: err.message
                })
            }

            else {
                let { Category, Description, Lessons, Duration } = req.body;
                //  console.log(req.file);

                let image = ''
                if (req?.file?.filename) {
                    image = req.file.filename
                }
                console.log(image)

                let courseData = new courseSchema({
                    Category: Category,
                    Description: Description,
                    Lessons: Lessons,
                    Duration: Duration,
                    Image: image
                })
                console.log(courseData);

                let saveCourse = courseData.save()

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

//////////////GET COURSE BY CAT //////////

export const getCourseByCategory = async (req, res) => {

    try {
        const category = await Category.findOne({ _id: req.params.category_id })
        // console.log(category._id);
        if (!category) {
            return res.status(404).send({
                success: false,
                message: "Category not found"
            });
        }

        const courses = await courseSchema.find({ Category: category._id })
        console.log(courses);
        res.status(200).send({
            success: true,
            category: category,
            course: courses,
        })
    }

    catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error while fetching course"
        })
    }
}

/////////////////////EDIT COURSE///////////////////////

export const editCourse = (req, res) => {

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

            let courseID = req.params.course_id
            let { Category, Description, Lessons, Duration } = req.body

            let oldData = await courseSchema.findOne({ _id: courseID })
            let pic = oldData.Image
            if (req?.file?.filename) {
                pic = req.file.filename
                if (fs.existsSync('./uploads/Images/' + oldData.Image)) {
                    fs.unlinkSync('./uploads/Images/' + oldData.Image)
                }
            }

            let updateCourse = await courseSchema.updateOne({ _id: courseID }, { $set: { Category: Category, Description: Description, Lessons: Lessons, Duration: Duration, Image: pic } })

            if (updateCourse.acknowledged) {
                res.status(200).json({
                    message: 'Update Sucessful',
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
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

///////////////Get Single Course///////////////////

export const getSingleCourse = async (req, res) => {

    try {
        let courseID = req.params.course_id

        let data = await courseSchema.findOne({ _id: courseID }).populate('Category')

        if (data) {
            res.status(200).json({
                success: true,
                data: data,
                message: "Single Prod Data",
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

///////////////DELETE COURSE//////////////////////

export const deleteCourse = async (req, res) => {

    try {
        let courseID = req.params.course_id
        let courseData = await courseSchema.findOne({ _id: courseID })
        let deleteData = await courseSchema.deleteOne({ _id: courseID })

        if (deleteData.acknowledged) {
            if (fs.existsSync('./uploads/Images/' + courseData.Image)) {
                fs.unlinkSync('./uploads/Images/' + courseData.Image)
            }

            res.status(200).json({
                message: "Course Deleted Sucessfully"
            })
        }
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

//////////GET ALL COURSE/////////////////

export const getAllCourses = async (req, res) => {

    try {
        let Data = await courseSchema.find({}).populate('Category')
        res.status(200).json({
            Data: Data,
            message: "Fetched All Products Sucessfully",
            path: 'http://localhost:5000/uploads/Images'
        })

    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message
        })
    }

}


