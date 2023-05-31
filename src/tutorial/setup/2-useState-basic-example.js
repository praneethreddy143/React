import React , {useState} from "react";
const State=()=>{
   const [text,setText]=useState('random Title')
   const handleClick=()=>{
     if (text === 'random Title') {
        setText('Hello world')
    }
    else{
        setText('random Title')
    }
   }
    return ( <React.Fragment>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>handleClick</button>
        
        </React.Fragment>)

}

export default State