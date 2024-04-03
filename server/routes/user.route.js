import express from 'express'
import { regUser, userLogin,GetAllUsers } from '../controller/user.cont'

const userRouter = express.Router()

userRouter.post('/registerUser',regUser)

userRouter.post('/loginUser',userLogin)

export default userRouter