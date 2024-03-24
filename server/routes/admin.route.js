import express from 'express'
import { adminLogin, registerAdmin } from '../controller/admin.cont'

const adminRouter = express.Router()

adminRouter.post('/registerAdmin',registerAdmin)
adminRouter.post('/adminLogin',adminLogin)

export default adminRouter
