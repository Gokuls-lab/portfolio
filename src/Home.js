import Nav from './Nav'
import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './css/home.css'
import { io } from 'socket.io-client';
import { Button} from 'react-bootstrap';

document.body.style.backgroundColor = "rgb(40,40,40)"




function Home(){

    <script src='server.js'></script>
    var socket = io();
    function vaildate_id(){
        var id=document.getElementById("room_id").value;
        if(id.length<=0){
            document.getElementById("log").style.display="block";
            setTimeout(()=>{
            document.getElementById("log").style.display="none";
            },2000);
        }
    }

    
return(
    <>
    <Nav />
    <div class="log" id="log">
        <div class="alert alert-danger" role="alert">Invalid Room ID !!</div>
    </div>
    <center>
        <div className='form'>
            <input className='room_id' type='number' min={1} placeholder='Room ID' id='room_id'></input> <br />
            <div class="row g-2">
            <div class="col me-3"><Button className='form-control' variant='primary' onClick={vaildate_id}>Join</Button></div>
            <div class="col"><Button className="form-control" variant='success'>Create Room</Button></div>
            </div>
        </div>
    </center>
    </>
);
}

export default Home;