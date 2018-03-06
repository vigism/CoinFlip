var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var path=require('path');


app.use(express.static(path.join(__dirname, '/public')));

app.get('/',function(req,res){
  res.sendFile(__dirname+'public/index.html');
});


io.on('connection',function(socket){

});

http.listen(3000,function(){
  console.log('listening on 3000');
});
