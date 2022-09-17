import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const register = async(req,res,next) =>{
    //const saltRounds = 10;
    try{
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
        username:req.body.username,
        password:req.hash,
        email:req.body.email
     });
     await newUser.save();
    }catch(err){

    }
}