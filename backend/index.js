import express from 'express'
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/users.js'

const app = express();
dotenv.config();
const port = 8000;

// database connection and query
const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to the mongodb");
    }catch(err){
        throw err;
    }
};

// all middel ware will be here
app.use(express.json())

app.use('/api/users',userRoute);

  
  app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  });