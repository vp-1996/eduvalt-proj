import express from 'express'
import { addCourse } from '../controller/course.cont'

const courseRouter = express.Router()

courseRouter.post('/addCourse',addCourse)

export default courseRouter