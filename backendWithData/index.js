const express = require ("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const path = require("path");
const form = require("./models/form");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main()
.then(()=>{
    console.log("connected")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/form');
}

// let formData = new form({
//     email:"777vsolanki@gmail.com",
//     password:"vaibhav1122"
// })
// formData.save().then((res)=>{
//        console.log(res);
// })

app.get("/",(req,res)=>{
    res.send("hello user");
    console.log("hello")
    
})
// Register Route - Saving Form Data to Database
app.post("/register", async (req, res) => {
  console.log(req.body);
    try {
      const { email, password } = req.body;
      // Create a new form entry
      const newForm = new form({
        email,
        password, // Ideally, hash the password before saving
      });
  
      // Save to database
      await newForm.save();
  
      res.send(`User registered successfully: ${email}`);
    } catch (error) {
      console.error("Error saving form data:", error);
      res.status(500).send("Internal Server Error");
    }
  });
app.listen(port,()=>{
    console.log(`server is running on port http://localhost/${port}`)
})