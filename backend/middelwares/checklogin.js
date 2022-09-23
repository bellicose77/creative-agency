import jwt from 'jsonwebtoken'
const checkLoging = async(req,res,next)=>{
    const {authorization} = req.headers;
    console.log(authorization)
    try{
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        next();
    }catch(err){
       res.status(400).json("token failed");
    }
};
export default checkLoging;