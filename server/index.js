import express, { response } from "express";
import { MONGODB_URL, PORT } from "./config.js"
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import bookRoutes from './routes/booksRoutes.js'
import cors from 'cors'

const app=express();

//middleware for parsing request body
app.use(express.json())

//Middleware for handling CORS policy
//option 1: allow all origins with default of cors(*)
app.use(cors())
//option 2: allow custom origins
// app.use(
//     cors({
//         origin: 'http:/localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )
app.get('/',(req,response)=>{
    console.log(req)
    return response.status(234).send('meow')
})

//middleware and router routing
app.use('/books',bookRoutes)

mongoose
    .connect(MONGODB_URL)
    .then(()=>{
        console.log('App connected to database')
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error);
    })
