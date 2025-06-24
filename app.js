const express= require('express');
const app= express();
const PORT=5500;
const path = require('path');
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
  console.log('connection Successful');
  
}).catch((err)=> console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
};


app.set("views", path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


//FORM ROUTE
app.get('/chats/new',(req,res)=>{
  res.render('form.ejs');
})


//ALL CHATS ROUTE
app.get('/chats',async (req,res)=>{
  let chats= await Chat.find();
  res.render('index.ejs',{chats})
})

//HOME ROUTE
app.get('/',(req,res)=>{
  res.render('welcome.ejs')
});

app.listen(PORT, (req,res)=>{
  console.log(`Server is running on PORT ${PORT}`);
  
});