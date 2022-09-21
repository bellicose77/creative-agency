import Service from "../models/Service"

export const addService = async(req,res,next)=>{
    try{
        const newService = new Service({
            title:req.body.title,
            description:req.body.description,
            price:req.body.price
        });
        await newService.save();
        res.status(200).json("Service created successfully")

    }catch(err){

    }
}