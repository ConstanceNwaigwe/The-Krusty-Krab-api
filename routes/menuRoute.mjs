import express from 'express';
import Menu from '../models/menuSchema.mjs'

const router = express.Router()

router.route("/").get(async(req,res)=>{
    try{
        const getMenu = await Menu.find({})
        res.json(getMenu)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to get menu data.')
    }
}).post(async(req,res)=>{
    try{
        const postMenu = new Menu(req.body)
        await postMenu.save()
        res.json(postMenu)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to post menu data.')
    }
})

router.route("/:id").put(async(req,res)=>{
    try{
        const putMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(putMenu)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to update menu data.')
    }
}).delete(async(req,res)=>{
    try{
        await Menu.findByIdAndDelete(req.params.id)
        res.send(`${req.params.id} has been deleted`)
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to delete menu data.')
    }
})

