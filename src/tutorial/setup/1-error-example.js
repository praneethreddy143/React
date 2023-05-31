import React from 'react'

const ErrorExample=()=>{
    let title="random"
    const handleClick=()=>{
        title="NewTitle"
        console.log(title)
    // let newTitle=document.getElementById('#title1')
    // console.log(newTitle)
    }
    return (
        <>
        
        <h2 id='title1'>{title}</h2>
        <button type='button' className='btn' onClick={handleClick}>ChangeTitle</button>
        </>
    )
}

export default ErrorExample
