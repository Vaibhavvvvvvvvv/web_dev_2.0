const express = require("express");
const app = express();
const port = 3000;

//middleware function 
app.use((req,res,next)=>{
    console.log(`${req.method} request for ${req.url}`)
    next();
})


app.get("/", (req, res) => {
    res.send("<h1>Hello Express</h1>");
  });
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})