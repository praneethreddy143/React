import React, {useState,useEffect} from "react";
const url='https://api.github.com/users'
const UseEffectetch=()=>{
    const [users,setUsers]=useState([]);
    const getUsers=async()=>{
        const response= await fetch(url);
        const users=await response.json()
        // console.log(users)
        setUsers(users)
    }
    useEffect(()=>{
        getUsers()
    },[])
    return(
        <>
        <h3>Git hub Users</h3>
        <ul className="users">
        {
            users.map((data)=>{
                const {login,id,avatar_url}=data;
                return <li key={id}>
                    <img src={avatar_url}></img>
                    <div>
                        <h4>{login}</h4>
                    </div>
                </li>
            })
        }
        </ul>
        
        </>
    )
}
export default UseEffectetch;