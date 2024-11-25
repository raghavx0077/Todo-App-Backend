const express = require ('express');
const TodoRoutes =require('./Routes/TodoRoutes');
const MongoDB = require('./config/Db')
require('dotenv').config();
const cors=require('cors');

const app=express();

app.use(express.json());
console.log("JSON Middleware added");


app.use(cors({
    origin: 'http://localhost:5173', // Replace this with your frontend's URL if it's running elsewhere
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only necessary methods
    credentials: true, // Allow cookies if needed
  }));
console.log("CORS Middleware added");

MongoDB();

app.use('/api',TodoRoutes);
console.log("Routes initialized");

const PORT =process.env.PORT || 3000;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});