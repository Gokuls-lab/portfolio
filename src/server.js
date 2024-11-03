var app =require('express')();

var http=require('http').createServer(app)
var io=require('socket.io')(http);

const PORT = 3000;

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

http.listen(PORT,function(){
    console.log("listening on : "+PORT);
});

io.on('connection',function(socket){
    console.log("User has been joined : ",socket.id);
    socket.on("msg",function(data){

        socket.join("room-"+44);
        io.sockets.in("room-44").emit("gk","you are connected");
        io.emit("new_msg","user: "+socket.id+" "+data);
    });

    socket.on('disconnect',function(){
        console.log("user disconnected")
    });
});