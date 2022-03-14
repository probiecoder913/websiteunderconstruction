const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.listen(3000,function(){
    console.log("Listening on 3000");
})

app.use(express.static("public")); 
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

