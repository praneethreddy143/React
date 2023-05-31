import React,{useState,useEffect} from "react";

const ShowHide=()=>{
    const [show,setShow]=useState(false)
    return(
        <>
        <button className="btn" onClick={()=>setShow(!show)}>ShowHide</button>
        {show && <Item/>}
        </>
       
    )
}
const Item=()=>{
    return <div style={{marginTop: '2rem'}}>
        <h1>Window</h1>
        <h2>Size:</h2>
         
    </div>
}
export default ShowHide;