const express= require("express");
const cors=require("cors");
const app=express();

app.use(cors());

app.use(express.json());
app.get("/test",(req,res)=>{
    res.json({ message: "helloe from server" });

    
})
app.listen(8080,()=>{
    console.log("connected on 8080");
});