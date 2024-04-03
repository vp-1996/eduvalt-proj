import express from 'express'
import { adminLogin, registerAdmin,GetAllUsers } from '../controller/admin.cont'

const adminRouter = express.Router()

adminRouter.post('/registerAdmin',registerAdmin)
adminRouter.post('/adminLogin',adminLogin)
adminRouter.get('/getUsers',GetAllUsers)

export default adminRouter
