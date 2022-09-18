import User from "../models/User.js"
import bcrypt from 'bcrypt'

export const register = async(req,res,next) =>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
        username:req.body.username,
        password:hash,
        email:req.body.email
     });
     await newUser.save();
     res.status(200).json("user created successfully")
    }catch(err){
        next(err);

    }
};
export const login = async(req,res,next)=>{
    try{
        const username = req.body.username;
        const user = await User.findOne({username:username})
        const password = req.body.password;
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )
        if(isPasswordCorrect){
            res.json("Login successful")
        }
        else{
            res.json("Login unsuccessful")
        }
        console.log(user)

    }catch(err){
        next(err)
    }
}