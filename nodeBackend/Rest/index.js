const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine",path.join(__dirname,"views"));
app.set(express.static,(path.join(__dirname,"pblic")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

let posts =[
    {
        username: "vaibhav",
        content: "happy coding",
    },
    {
        username: "john_doe",
        content: "learning express",
    },
    {
        username: "jane_smith",
        content: "node.js is awesome",
    },
    {
        username: "alice_wonder",
        content: "middleware is powerful",
    },
    {
        username: "bob_builder",
        content: "building APIs with express",
    },
    {
        username: "charlie_brown",
        content: "debugging node applications",
    },
    {
        username: "david_tennant",
        content: "asynchronous programming",
    },
    {
        username: "eva_green",
        content: "handling errors gracefully",
    },
    {
        username: "frank_underwood",
        content: "routing in express",
    },
    {
        username: "grace_hopper",
        content: "writing clean code",
    },
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})

app.get("/posts/add",(req,res)=>{
    res.render("form.ejs");
})

app.post("/posts/add",(req,res)=>{
   let {username,content}=req.body
   posts.push({username,content});
   res.send("request received")
})
app.listen(port,()=>{
   console.log(`server is running on port http://localhost${port}/posts`);
})
