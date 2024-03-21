import express from 'express'
import { addCategory } from '../controller/category.cont'

const CategoryRouter = express.Router()

CategoryRouter.post('/addCategory', addCategory)

export default CategoryRouter