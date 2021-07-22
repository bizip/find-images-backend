import fetch from 'node-fetch'

exports.getImageId=async (req,res,next)=>{
  const {id}=req.query;
  try{
    const api_url= `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
    const result=await fetch(api_url);
    const json=await result.json();
    res.status(200).json({
      message:json
    })
  }catch(err){
    throw new Error("Record NOt found");
  }
 
}