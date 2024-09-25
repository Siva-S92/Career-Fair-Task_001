import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoDBConnection } from './lib/mongodbConnect.js';
import { ProductsRouter } from './routes/products.js';


//dotenv config
dotenv.config();


// app configuration
const app = express();
const PORT = process.env.PORT || 8000

// middlewares
app.use(express.json({limit: '60mb'}))
app.use(express.urlencoded({extended: true, limit: '60mb'}))
app.use(cors({
    origin: "*"
}))

// database connectivity
mongoDBConnection();

// routes
app.use("/api", ProductsRouter)


// server listern
app.listen(PORT, () => {
    console.log(`Server Runnning on the Port ${PORT}`)
})