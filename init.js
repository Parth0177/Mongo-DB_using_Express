const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
  console.log('connection Successful');
  
}).catch((err)=> console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WhatsApp");
};

let allChats=([
  {
    from:"Parth",
    to:"Tinku",
    msg:"Kya re!",
    created_at: new Date()
  },
  {
    from:"Parth",
    to:"Saumya",
    msg:"Aisa marunga na!",
    created_at: new Date()
  },
  {
    from:"Tinku",
    to:"Sargam",
    msg:"Maine block nhi kiya",
    created_at: new Date()
  },
  {
    from:"Saumya",
    to:"Parth",
    msg:"Tatti Tight",
    created_at: new Date()
  },
  {
    from:"Gungun",
    to:"Parth",
    msg:"Sirrrr!!!!!",
    created_at: new Date()
  },
  {
    from:"Aryan",
    to:"Shivansh",
    msg:"Tum or parth bhai ho",
    created_at: new Date()
  },
  {
    from:"Shivansh",
    to:"Parth",
    msg:"Aoo Bhaiya ticket",
    created_at: new Date()
  },
  {
    from:"Sargam",
    to:"Parth",
    msg:"Bhai mil le",
    created_at: new Date()
  },
  {
    from:"Parth",
    to:"Sargam",
    msg:"I miss eww",
    created_at: new Date()
  },
  {
    from:"Tinku",
    to:"Parth",
    msg:"Bhaiya catch kro",
    created_at: new Date()
  },
  {
    from:"Parth",
    to:"Tinku",
    msg:"ladki check kro",
    created_at: new Date()
  },
  {
    from:"Parth",
    to:"Gungun",
    msg:"Bhaiya nhi Sir!!",
    created_at: new Date()
  },
]);

Chat.insertMany(allChats);