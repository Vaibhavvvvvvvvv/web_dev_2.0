const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("server is listening ");
})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})

app.post("/submit",(req,res)=>{
    res.send("form submit");
})
app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`)
})