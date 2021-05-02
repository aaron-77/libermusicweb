
let express = require("express");
let path  = require('path');
let app = express();

app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})

app.get('/Home',function(req,res){
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})
app.get('/About',function(req,res){
    res.sendFile(path.resolve(__dirname,'public','About.html'));
})

app.get('/Contact',function(req,res){
    res.sendFile(path.resolve(__dirname,'public','Contact.html'));
})
let ip = "127.0.0.1";
let port = 4000;

app.listen(port,ip,()=>{
    console.log("escuchando en  "+ip+" puerto "+port)
    console.log("\n"+path.resolve(__dirname,'public','Contact.html'));

})

