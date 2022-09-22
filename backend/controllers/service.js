import Service from "../models/Service.js"

export const addService = async(req,res,next)=>{
    try{
        const newService = new Service({
            title:req.body.title,
            description:req.body.description,
            price:req.body.price
        });
        await newService.save();
        res.status(200).json("Service created successfully");

    }catch(err){
        console.log(err)
    }
};
export const getServices = async (req,res,next)=>{
    try{
        const service = await Service.find();
        console.log(service);
        res.status(200).json(service)

    }catch(err){
        next(err)
    }
   

}