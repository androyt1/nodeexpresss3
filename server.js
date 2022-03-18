require('dotenv').config();
const express=require('express');
const UserRouter=require('./routes/User');
const multer=require('multer');
const app=express();





app.use(express.json());

app.use('/api/users',UserRouter);

app.use((error,req,res,next)=>{
    if(error instanceof multer.MulterError){
        res.status(400).json({
            message:error.message
        })
    }else{
        res.status(500).json({
            message:error.message
        })
    }
})

app.listen(3200,()=>{
    console.log("server started at port 3200");
});