import express from 'express';
import Staff from '../models/staffSchema.mjs'

const router = express.Router()

router.route("/").get(async(req,res)=>{
    try{
        const getStaff = await Staff.find({})
        res.json(getStaff)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to get staff data.')
    }
}).post(async(req,res)=>{
    try{
        const postStaff = new Staff(req.body)
        await postStaff.save()
        res.json(postStaff)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to post staff data.')
    }
})

router.route("/:id").put(async(req,res)=>{
    try{
        const putStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(putStaff)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to update staff data.')
    }
}).delete(async(req,res)=>{
    try{
        await Staff.findByIdAndDelete(req.params.id)
        res.send(`${req.params.id} has been deleted`)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to delete staff data.')
    }
})

