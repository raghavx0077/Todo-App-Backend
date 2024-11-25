const mongoose = require('mongoose');
require('dotenv').config()

const Db=()=>{ 
     mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("connected to MongoDb");
    })
    .catch((err)=>console.log("error",err));
}
module.exports=Db;

