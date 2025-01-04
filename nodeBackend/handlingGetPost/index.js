const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/register",(req,res)=>{
    let {email,password}=req.query;
    res.send(`this is get request wlcome${email}`)
})

app.post("/register",(req,res)=>{
    let {email,password}=req.body
    res.send(`this is post request welcome${email}`)
})


app.listen(port,()=>{
    console.log(`server is listening on http://localhost:${port}`)
})