
let express = require("express");
let path  = require('path');
let app = express();

app.use(express.static(__dirname+'/public'));
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
let ip = "localhost";
let port = 9000;

app.listen(port,()=>{
    console.log("escuchando en puerto "+port)
    console.log("\n"+path.resolve(__dirname,'public','Contact.html'));

})

