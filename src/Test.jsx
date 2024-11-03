import {React,useState,useEffect} from "react";

function Test(){
    const [count,setCount]=useState(0);
    const [flag,setFlag]=useState(true);

    useEffect(()=>{
        setFlag(!flag);
    },[count])

    return(
        <>
        <h1>Hello {count}</h1> <br /> <h3>{flag?'ON':'OFF'}</h3>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    );
}

export default Test;