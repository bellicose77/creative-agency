import express from 'express'
import mongoose  from 'mongoose';
import dotenv from 'dotenv'

const app = express();
dotenv.config();
const port = 8000;
const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to the mongodb")
    }catch(err){
        throw err;
    }
}
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })