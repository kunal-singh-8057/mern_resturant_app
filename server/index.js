const express = require("express");
const mongoose = require("mongoose");
const app = express();
const restorentmodel = require("./models/user");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/resturent").then(()=>{
    console.log("Database connected successfully");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


app.get("/getappointment",async(req,res)=>{
    const pre = await restorentmodel.find();

    res.status(200).json({
        pre,
        success:true
    })
})

app.post("/postusers",async(req,res)=>{
   const cre = await restorentmodel.create(req.body);

    res.status(200).json({
        cre,
        success:true
    })
});

app.listen("3000",()=>{
    console.log("The server is working at : http://localhost:3000");
})