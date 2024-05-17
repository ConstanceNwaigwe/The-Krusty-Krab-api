// Import need packages and files
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const App = express();
const PORT = process.env.PORT || 2024;
const link = process.env.DBLINK || ""

App.use(express.json())

App.get('/', (req,res)=>{
    res.send("Welcome to the Krusty Krab API")
})

App.use((err, req, res, next)=>{
    res.status(500).send('Looks like plantain is trying to get to our server again. Give us a moment to catch him.')
})

App.listen(PORT, () =>{
    console.log(`Krusty Krab api is running on port: ${PORT}`)
})