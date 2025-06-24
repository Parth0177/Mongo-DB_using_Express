const express= require('express');
const app= express();
const PORT=5500;
const path = require('path');
const mongoose = require('mongoose');

main().then(()=>{
  console.log('connection Successful');
  
}).catch((err)=> console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
};

app.set("views", path.join(__dirname,"views"));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
  res.send("Wroking Root");
});

app.listen(PORT, (req,res)=>{
  console.log(`Server is running on PORT ${PORT}`);
  
});