const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    let head = `<h1>hello express</h1>`
    res.send(`${head}`)
})

app.listen(port,()=>{
    console.log(`server is runnig http://localhost:${port}`)
})
