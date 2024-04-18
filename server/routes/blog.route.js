import express from 'express'
import { addBlog,deleteBlog,getAllBlogs, getSingleBlog, updateBlog } from '../controller/blog.cont'

let blogRouter = express.Router()

blogRouter.post('/createBlog',addBlog)

blogRouter.get('/GetAllBlogs',getAllBlogs)

blogRouter.delete('/DeleteBlog/:blog_id',deleteBlog)

blogRouter.get('/GetSingleBlog/:blog_id',getSingleBlog)

blogRouter.put('/UpdateBlog/:blog_id',updateBlog)

export default blogRouter  