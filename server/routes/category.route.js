import express from 'express'
import { addCategory,getAllCategories,getSingleCategory,updateCategory,deleteCategory} from '../controller/category.cont'

const CategoryRouter = express.Router()

CategoryRouter.post('/addCategory', addCategory)
CategoryRouter.get('/getAllCategories',getAllCategories)
CategoryRouter.get('/getSingleCategory/:categoryID',getSingleCategory)
CategoryRouter.put('/updateCategory/:cat_id',updateCategory)
CategoryRouter.delete('/deleteCategory/:cat_id',deleteCategory)

export default CategoryRouter