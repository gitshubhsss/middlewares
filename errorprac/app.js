const express=require("express");
const app=express();

const ExpressError=require("./ExpressError");

app.get("/admin",(req,res)=>{
    throw new ExpressError(401,"Forbidan access")//we are thorowing the error from here
})

app.use((err,req,res,next)=>{
    let{status,message}=err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("app is listening on the port 8080"); 
})