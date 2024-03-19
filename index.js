const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const route=require('./routes/route')
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Akshu22:Akshu11@cluster0.celuymd.mongodb.net/Assignment",{useNewUrlParser: true})

.then(()=>{
    console.log("mongodb is connected")
})
.catch(err => console.log(err))

app.use('/',route)

app.listen(3000,()=>{
    console.log("Server is running at port 3000")
})