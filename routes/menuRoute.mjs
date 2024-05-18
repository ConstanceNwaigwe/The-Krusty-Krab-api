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
        if(!req.body.name.trim() || !req.body.ingredients.trim()){
            res.send("Plankton, you need a name and ingredients field like this {name: Plankton patty, ingredients: Plankton}")
        }
        else if(req.body.name.trim().toLowerCase().includes("chum") || req.body.ingredients.trim().toLowerCase().includes("chum")){
            res.send("Chum? nice try plankton.")
        }
        else{
            const postMenu = new Menu(req.body)
            await postMenu.save()
            res.json(postMenu)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to post menu data.')
    }
})

router.route("/:id").get(async(req,res)=>{
    try{
        const getMenu = await Menu.findById(req.params.id)
        if(!getMenu){
            res.send(`${req.params.id} doesn't exist in this database Plankton. Try Again`)
        } else{
            res.json(getMenu)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to get menu data by id.')
    }
    
}).put(async(req,res)=>{
    try{
        if(!req.body.name.trim() || !req.body.ingredients.trim()){
            res.send("Plankton put the name and/or ingredients back. Come on. Don't make me call Mr.Krabs on you.")
        }
        else if(req.body.name.trim().toLowerCase().includes("chum") || req.body.ingredients.trim().toLowerCase().includes("chum")){
            res.send("Plankton come on, you don't even like chum nor do we.")
        }
        else{
            const putMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.json(putMenu)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to update menu data.')
    }
}).delete(async(req,res)=>{
    try{
        const getMenu = await Menu.findById(req.params.id)
        if(!getMenu){
            res.send(`Not you tryna delete something that doesn't exist. Try again Plankton`)
        } else{
            await Menu.findByIdAndDelete(req.params.id)
            res.send(`${req.params.id} has been deleted`)
        }
    }catch(err){
        console.error(err)
        res.status(500).send('Plankton is trying to access our Server. Unable to delete menu data.')
    }
})

export default router;
