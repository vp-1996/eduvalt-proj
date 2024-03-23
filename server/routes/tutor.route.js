import express from 'express'
import { addTutor } from '../controller/tutor.cont'

const tutorRouter = express.Router()

tutorRouter.post('/addTutor',addTutor)

export default tutorRouter