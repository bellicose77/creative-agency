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
   

};
export const getSingleService = async(req,res,next)=>{
    // const id = req.params.id;
    // console.log(id);
    try{
        const serviceResult = await Service.findById(req.params.id);
        res.status(200).json(serviceResult)

    }
    catch(err){
        next(err)
    }
};

export const deleteService = async(req,res,next)=>{
    const id = req.params.id;
    try{
         console.log("somethi")
        await Service.deleteOne({_id:id})
        res.status(200).json("deleted successfully")
    }catch(err){
        
        console.log(err)
       // next(err)
    }
};

export const updateService = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const updateValue = req.body;
        const updateservice = await Service.updateOne({_id:id},{$set:updateValue});
        res.status(200).json("updated successfully")

    }catch(err){
        next(err)
    }

}