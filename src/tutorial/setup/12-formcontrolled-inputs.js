import React,{useState} from "react";

const Forminput=()=>{

    const [person,setPerson]=useState({firstName:'',email:'',age:''})
    const [people,setPeople]=useState([]);
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value
        console.log(name,value)
        setPerson({...person,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(person.firstName && person.email && person.age){
            const newPerson ={...person,id:new Date().getTime.toString}
            setPeople([...people,newPerson])
            setPerson({firstName:'',email:'',age:''})
        }
    }
    return(
        <>
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name:</label>
                    <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}></input>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={person.email} onChange={handleChange}></input>
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" name="age" value={person.age} onChange={handleChange}></input>
                </div>
                <button type="submit" className="btn" onClick={handleSubmit}>add Person</button>
            </form>
            {
                people.map((per)=>{
                    const {id,firstName,email}= per
                    return <div key={firstName}>
                        <h3>{firstName}</h3>
                        <h4>{email}</h4>
                    </div>
                })
            }
        </article>
        </>
    )
}

export default Forminput;