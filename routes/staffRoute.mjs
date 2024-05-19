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
        if(!req.body.name.trim() || !req.body.jobTitle.trim()){
            res.send("Plankton, you need a name and job title field like this {name: Plankton, jobTitle: ruler of the universe}")
        }
        else if(req.body.name.trim().toLowerCase().includes("plankton")){
            res.send("We know it's you plankton, Mr.Krab's kidnapping karen as we speak unless you log off.")
        }
        else{
            const postStaff = new Staff(req.body)
            await postStaff.save()
            res.json(postStaff)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to post staff data.')
    }
})

router.route("/:id").get(async(req,res)=>{
    try{
        const getStaff = await Staff.findById(req.params.id)
        if(!getStaff){
            res.send(`${req.params.id} doesn't exist in this database Plankton. Try Again`)
        } else{
            res.json(getStaff)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to get staff data by id.')
    }
    
}).put(async(req,res)=>{
    try{
        const getStaff = await Staff.findById(req.params.id)
        if(!getStaff){
            res.send(`Not you tryna change something that doesn't exist. Try again Plankton`)
        } else{
            if(!req.body.name.trim() || !req.body.jobTitle.trim()){
                res.send("Plankton put the name and/or jobTitle back. Come on. Don't make me call Mr.Krabs on you.")
            }
            else if(req.body.name.trim().toLowerCase().includes("plankton")){
                res.send("We warned you plankton. Say bye bye to Karen. She's our wife now.")
            }
            else{
                const putStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, {new: true})
                res.json(putStaff)
            }
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to update staff data.')
    }
}).delete(async(req,res)=>{
    try{
        const getStaff = await Staff.findById(req.params.id)
        if(!getStaff){
            res.send(`Not you tryna delete something that doesn't exist. Try again Plankton`)
        } else{
            await Staff.findByIdAndDelete(req.params.id)
            res.send(`${req.params.id} has been deleted`)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to delete staff data.')
    }
})

export default router;

