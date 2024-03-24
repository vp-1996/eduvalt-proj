import express from 'express'
import { addTutor,getSingleTutor,getAllTutors,updateTutor, deleteTutor} from '../controller/tutor.cont'

const tutorRouter = express.Router()

tutorRouter.post('/addTutor',addTutor)
tutorRouter.get('/getSingleTutor/:tutor_id',getSingleTutor)
tutorRouter.get('/getAllTutors',getAllTutors)
tutorRouter.put('/updateTutor/:tutor_id',updateTutor)
tutorRouter.delete('/deleteTutor/:tutor_id',deleteTutor)

export default tutorRouter