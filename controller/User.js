const User=require('../model/User');
const S3uploadsv2=require('../s3service');
const S3uploadsv3=require('../s3service');

exports.register=async(req,res)=>{    
    const files=req.files;     
   try{
    const results=await S3uploadsv2.S3uploadsv2(files)
    console.log(results);
   return res.status(201).json({
        message:'file uploaded successfully',
        results
    })
   }catch(e){
       console.log(e);
        return res.status(500).json({
                message:'error occured while uploading file',
                error:e
         })
   }
    // const user=new User({
    //     name:req.body.name,
    //     email:req.body.email,
    //    image:req.files
    // });
   
} 

exports.register3=async(req,res)=>{    
    console.log("we are in register3");
    const file=req.files[0];    
    console.log(file); 
   try{
    const result=await S3uploadsv3.S3uploadsv3(file)
    console.log(result);
   return res.status(201).json({
        message:'file uploaded successfully',
        result
    })
   }catch(e){
       console.log(e);
        return res.status(500).json({
                message:'error occured while uploading file',
                error:e
         })
   }
    // const user=new User({
    //     name:req.body.name,
    //     email:req.body.email,
    //    image:req.files
    // });
   
} 

