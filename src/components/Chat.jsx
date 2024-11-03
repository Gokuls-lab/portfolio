import React,{useState,useEffect} from "react";
import io from 'socket.io-client';

const socket=io("http://localhost:5000/");

import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chat.css'
import { Button} from 'react-bootstrap';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
document.body.style.backgroundColor = "rgb(40,40,40)"


var Name="User";
Name = prompt('Enter Name');

function Chat(){


    const [visible,setVisible]=useState("block");
    //const [messages,setMessages] =useState([{name:Name,m:"Hello.."}]);   
    const [messages,setMessages] =useState([]);    
    /*useEffect(()=>{
        setMessages([...messages,{name:Name,m:"jsdgvbh.."}]);
    },[]);*/
    //useEffect(()=>{
        socket.on("message",(message)=>{
            //alert("Note: "+message);
        });

        socket.on("joined_room",(room_id)=>{
            //alert("Joined Room ID: "+room_id);
            //let bar = confirm('Confirm or deny');
        });

        socket.on("add_msg",(msg)=>{
            setMessages([...messages,msg]);
        });
    //});

    function createRoom(){
        socket.emit("create_room");
    }
function sendMsg(){
    var lastMsg=document.getElementById("msg").value;
    //alert(lastMsg);
    //setMessages([...messages,{name:"Gokul",m:lastMsg}]);
    document.getElementById("msg").value="";
    socket.emit("send_msg",{name:Name,m:lastMsg})
}
    function vaildate_id(){
        setVisible("none");
        var id=document.getElementById("room_id").value;
        if(id.length<=0){
            document.getElementById("log").style.display="block";
            setTimeout(()=>{
            document.getElementById("log").style.display="none";
            },2000);
        }else{
            socket.emit("join_room",id);
        }
    }
return(
    <>
    <Nav />
    <div class="log" id="log">
        <div class="alert alert-danger" role="alert">Invalid Room ID !!</div>
    </div>
    <center>
        <div className='form' id="form" style={{display:visible}}>
            <input className='room_id' type='number' min={1} placeholder='Room ID' id='room_id'></input> <br />
            <div class="row g-2">
            <div class="col me-3"><Button className='form-control' variant='primary' onClick={vaildate_id}>Join</Button></div>
            <div class="col"><Button className="form-control" variant='success' onClick={createRoom}>Create Room</Button></div>
            </div>
        </div>

        <div class="chats">
            {messages.map((msg)=>(
                <div class={(msg.name==Name?"msg self":"msg")}>
                    <p class="user_name">{msg.name}</p>
                <p class="user_msg">{msg.m}</p>
                </div>
            ))};
            <div className="message_box">
                <input type="text" name="" id="msg" placeholder="Message" />
<SendRoundedIcon sx={{color:"rgb(55,55,55)",fontSize:40}} onClick={sendMsg}/>

            </div>
        </div>
    </center>
    </>
);
}

export default Chat;