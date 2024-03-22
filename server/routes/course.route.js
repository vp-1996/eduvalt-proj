import express from 'express'
import { addCourse, getCourseByCategory,editCourse } from '../controller/course.cont'

const courseRouter = express.Router()

courseRouter.post('/addCourse', addCourse)
courseRouter.get('/getCourseByCategory/:category_id', getCourseByCategory)
courseRouter.put('/updateCourse/:course_id',editCourse)

export default courseRouter