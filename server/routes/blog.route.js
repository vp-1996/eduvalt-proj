import express from 'express'
import { addBlog,getAllBlogs } from '../controller/blog.cont'

let blogRouter = express.Router()

blogRouter.post('/createBlog',addBlog)

blogRouter.get('/GetAllBlogs',getAllBlogs)

export default blogRouter 