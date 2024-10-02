const fs = require("fs");
var msg = "Hello from node";
// fs.writeFile("message.txt",msg, ()=>{

// console.log("Write file error");

// });
fs.readFile("message.txt","utf8",(err,data)=>{
    console.log(data);
});