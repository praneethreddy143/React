import React,{useState,useEffect} from "react";
const UseEffectExample=()=>{
      const [size,setSize]=useState(window.innerWidth);
     useEffect(()=>{
        console.log(`helloworld`)
        window.addEventListener('resize',checkSize)
        return()=>{
            console.log( `cleanup`)
            window.removeEventListener('resize',checkSize)
        }
     })
     const checkSize=()=>{
        setSize(window.innerWidth)
     }
    return(
        
        <>
        <h1>window</h1>
        <h2>{size}</h2>
        </>
    )
}

 export default UseEffectExample