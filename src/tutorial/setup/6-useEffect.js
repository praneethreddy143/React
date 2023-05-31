import React,{useState,useEffect} from "react";

const UseEffectExample=()=>{
    const [value,setValue] = useState(0);
    useEffect(()=>{

        console.log('Use Effect')
        document.title=`Title is ${value}`
    },[value])
    console.log('Render componnet')
    return (

        <>

        <h2>{value}</h2>
        <button className="btn" onClick={()=>setValue(value+1)}>change</button>
        </>
    )
}

export default UseEffectExample;