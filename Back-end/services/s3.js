const AWS = require('aws-sdk');


//include this in your env. next to the mongodb uri
//only added for the jet post route yet.
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
const s3 = new AWS.S3();

const uploadtobucket = async(bucketname, filekey, data)=>{
    const params = {
        Bucket: bucketname,
        Key: filekey,
        Body: JSON.stringify(data),
        ContentType: 'application/json'
        
    };
    
    try{
        const result = await s3.upload(params).promise();
        return result.Location; //s3 url
    } catch (error){
        throw new Error("issue in s3 upload");    
    }
};
module.exports = uploadtobucket;