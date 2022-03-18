const uuid=require('uuid').v4
const {S3}=require('aws-sdk')
const {S3Client, PutObjectCommand}=require('@aws-sdk/client-s3')

exports.S3uploadsv2=async(files)=>{
    const s3=new S3()
    // const params={
    //     Bucket:process.env.AWS_BUCKET_NAME,
    //     Key:`uploads/${uuid()}-${file.originalname}`,
    //     Body:file.buffer,
    // }


    const params=files.map(file=>{
        return{
            Bucket:process.env.AWS_BUCKET_NAME,
            Key:`uploads/${uuid()}-${file.originalname}`,
            Body:file.buffer,
        }
    })
    return await Promise.all(params.map(param=>s3.upload(param).promise()))
    
    // return result=await s3.upload(params).promise()
}

exports.S3uploadsv3=async(file)=>{
    const s3client=new S3Client()
    const params={
        Bucket:process.env.AWS_BUCKET_NAME,
            Key:`uploads/${uuid()}-${file.originalname}`,
            Body:file.buffer,
    }
    s3client.send(new PutObjectCommand(params)) 
}