import dotenv from 'dotenv';
import mongoose from 'mongoose';
import staffSchema from "./models/staffSchema.mjs";
import menuSchema from "./models/menuSchema.mjs";
import { staffData } from "./utilities/staffData.mjs";
import { menuData } from "./utilities/menuData.mjs";

dotenv.config();

async function seed(){
    await mongoose.connect(process.env.DBLINK);
    await staffSchema.deleteMany({});
    await staffSchema.create(staffData);
    await menuSchema.deleteMany({});
    await menuSchema.create(menuData);
    console.log("connected")
    mongoose.connection.close()
}

seed()