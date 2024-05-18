// Import need packages and files
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// Import routes
import Menu from './routes/menuRoute.mjs'
import Staff from './routes/staffRoute.mjs'

dotenv.config();
const App = express();
const PORT = process.env.PORT || 2024;
const link = process.env.DBLINK || ""
await mongoose.connect(link);

App.use(express.json())


App.use('/menu', Menu)
App.use('/staff', Staff)

App.get('/', (req,res)=>{
    res.send("Welcome to the Krusty Krab API")
})


App.listen(PORT, () =>{
    console.log(`Krusty Krab api is running on port: ${PORT}`)
})