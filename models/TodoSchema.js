const mongoose =require('mongoose')
const todoSchema=new  mongoose.Schema({

Title:{
    type:String,
    unique:true,
    required :true,
},
Completed:{
    type:Boolean,
    default:false,
},
createdAt:{
    type:Date,
    default:Date.now,
},   
updatedAt:{
    type:Date,
    default:Date.now,
} 
});
module.exports=mongoose.model('TodoSchema',todoSchema);