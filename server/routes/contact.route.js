import express from 'express'
import { sendMessage } from '../controller/contact.cont'

 const contactRouter = express.Router()

 contactRouter.post('/SendMessage',sendMessage)

 export default contactRouter