import React, {useState} from "react";

const ObjectArray=()=>{
    const [people,setPeople]=useState({
        name:'Praneeth',
        age:25,
        message:'Welcome'
    })

    // const [name,setName]=useState('peter')
    // const [age,setAge]=useState(23)
    // const [message,setMesage=useState('WElcone to rreact learnning')
    
    const changeMessage=()=>{
        setPeople({...people,message:'Hi please continue'})
    }
    return (
        <>
        <h2>{people.name}</h2>
        <h2>{people.age}</h2>
        <h2>{people.message}</h2>
        <button className="btn" onClick={changeMessage}>changeMessage</button>
        </>


    )

}

export default ObjectArray