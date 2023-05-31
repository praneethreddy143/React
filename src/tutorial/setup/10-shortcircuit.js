import React,{useState,useEffect} from "react";

const ShortCircuit=()=>{
    const [text,setText]=useState('');
    const [isError,setIsError]=useState(false)

    return(
        <>
            <h2>{text || 'Praneeth'}</h2>
            <button className="btn" onClick={()=>setIsError(!isError)}>Toggle error</button>
            {isError && <h3>Error...</h3>}
            {isError ? <p>There is an Error ..</p>: <div>
                <p>there is no error</p></div>}
        </>
    )
}

export default ShortCircuit