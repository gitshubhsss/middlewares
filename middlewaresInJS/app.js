const express=require("express");
const app=express();

app.listen(8080,()=>{
    console.log("app is listening on the port 8080");  
});

// //middelware funtion can execute any code
// app.use("/",(req,res)=>{
//     res.send("Middleware funtions can execute any code");
// })

//Middlewares can break the request response cycle
// app.use(()=>{
//     console.log("Middle wares can break the request response cycle");
// });

// app.get("/api",(req,res)=>{
//     res.send("api route")
// });

//it can call to the next middleware funtion
//it can make changes in the request response object
// app.use("/api",(req,res,next)=>{
//     req.username="shubham";
//    return next()
// });

// app.get("/api",(req,res)=>{
//     console.log(req.username);
//     res.send(`your username is ${req.username}`);
// })


//make a kind of server where server receives the request on /admin 
//and our middleware checks whether the admin has coreect token or not

const checkToken=("/",(req,res,next)=>{
    let {token}=req.query;
    if(token=="data"){
        next();
    }
    throw new Error("Forbidden acces");
});

app.use("/admin",checkToken,(req,res)=>{
    res.send("data");
})

app.use("/student",checkToken,(req,res)=>{
    res.send("data");
})
