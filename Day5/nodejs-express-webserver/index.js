import express from "express";
const app = express();


app.get("/",(req,res) =>{    res.send("<h1>Welcome to Express Homepage</h1>");});

app.get("/about",(req,res) =>{    res.send("<h1>About Us</h1>");});

app.use((req,res) =>{    res.status(404).send("<h1>Page unavailable</h1>");});

app.listen(3000, () =>{
    console.log("Express Server is running in http://localhost:3000/")
})