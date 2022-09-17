import express from 'express'
import mongoose  from 'mongoose';
import dotenv from 'dotenv'

const app = express();
dotenv.config();
const port = 8000;
const connect = async() =>{
    try{

    }catch(err){
        throw err;
    }
}
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })