const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log("app is listening on the port 8080");  
});

//create an admin route & send and error with 403 statuscode

// app.get("/admin",(req,res)=>{
//     throw new Error("Forbidden access");
// }); 

// app.use((err,req,res,next)=>{
//     let{status=403,message}=err;
//     res.status(status).send(message);
// })

//using the Error handeling class

const ErrorHandeler=require("./ErrorHandeler");

app.get("/admin",(req,res)=>{
    throw new ErrorHandeler(403,"forbidden access");//declareing the error
})

//handeleing the error

app.use((err,req,res,next)=>{
    console.log("1 error handler called");
    next(err);
})

app.use((err,req,res,next)=>{
    console.log("2 error handler called");
    next(err);
})
app.use((err,req,res,next)=>{
    console.log("3 error handler called");
    next(err);
})

app.use((err,req,res,next)=>{
   let{status,message}=err;
   res.status(status).send(message);
})


