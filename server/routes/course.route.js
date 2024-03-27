import express from 'express'
import { addCourse, getCourseByCategory,editCourse,getSingleCourse,deleteCourse,getAllCourses } from '../controller/course.cont'

const courseRouter = express.Router()

courseRouter.post('/addCourse', addCourse)
courseRouter.get('/getCourseByCategory/:category_id', getCourseByCategory)
courseRouter.put('/updateCourse/:course_id',editCourse)
courseRouter.get('/getSingleCourse/:course_id',getSingleCourse)
courseRouter.delete('/deleteCourse/:course_id',deleteCourse)
courseRouter.get('/GetAllCourses',getAllCourses)

export default courseRouter