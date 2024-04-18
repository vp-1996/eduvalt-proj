import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import CategoryRouter from './routes/category.route';
import courseRouter from './routes/course.route'
import tutorRouter from './routes/tutor.route';
import adminRouter from './routes/admin.route';
import userRouter from './routes/user.route';
import contactRouter from './routes/contact.route';
import { addBlog } from './controller/blog.cont';
import blogRouter from './routes/blog.route';

dotenv.config();
let app = express()
let port = 5000
app.use(express.static(__dirname))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())   

var corsOptions = {
    // origin: 'http://localhost:5000',---
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, PATCH,  POST, DELETE"
}

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/eduvalt-db')
    .then(() => {
        console.log("Database Connected Successfuly!!!!")
    })
    .catch((err) => {
        console.log("Error:", err)
    })

app.use('/category', CategoryRouter)
app.use('/course',courseRouter) 
app.use('/tutor',tutorRouter)
app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use ('/contact',contactRouter)
app.use('/blog',blogRouter)