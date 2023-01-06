var express = require('express');
var router = express.Router();
const {jsonResponse} = require('../lib/helper')
const contactsController = require('../controllers/contacts.controllers')

router.get('/', async(req,res)=>{
    try{
        const result = await contactsController.getAll();
        res.json(jsonResponse(result));
        
    }catch(err){
        res.json(jsonResponse(err.message,false));
    }

})
router.post('/removeProduct/:id', async(req,res)=>{
    try{
        const result = await contactsController.remove(req.params.id);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.post('/createContact', async(req,res)=>{
    try{
        console.log(req.body);
        const result = await contactsController.createContact(req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.post('/editContact/:id', async(req,res)=>{
    try{
        const result = await contactsController.findContact(req.params.id);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})
router.post('/editCont/:id', async(req,res)=>{
    try{
        console.log(req.params.id);
        const result = await contactsController.editContact(req.params.id, req.body);
        res.json(jsonResponse(result));

    }catch(err){
        res.json(jsonResponse(err.message,false));
    }
})


module.exports = router;