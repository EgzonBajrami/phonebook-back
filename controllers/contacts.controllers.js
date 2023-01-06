const contactsModel = require('../models/contacts.models')

module.exports = {
    getAll: async() =>{
        const result = await contactsModel.find();
        return result;

    },
    createContact: async(params) =>{
        console.log(params.numbers);
        const result = await contactsModel.create({
            firstName:params.name,
            lastName:params.lastName,
            address:params.address,
            city:params.city,
            country:params.country,
            emails:params.emails,
            phonenumber:params.numbers
        })
        console.log(result);
        return result;

    },
    remove: async(params) =>{
        console.log(params);
        const result = await contactsModel.findByIdAndDelete(params);
        return result;
    },
    findContact: async(params)=>{
        const result = await contactsModel.findById(params);
        console.log(result);
        return result;
    },
    editContact: async(postId, params) =>{
        console.log(postId);
        const result = await contactsModel.findByIdAndUpdate(postId,{
            firstName:params.name,
            lastName:params.lastName,
            address:params.address,
            city:params.city,
            country:params.country,
            emails:params.emails,
            phonenumber:params.numbers

        })
        return result;
        
    }
}