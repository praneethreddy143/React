import React,{useState,useEffect} from "react";
const url='https://api.github.com/users/QuincyLarson'
const MultipleReturns=()=>{
    const [loading,setLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const [user,setUser]=useState([]);
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers=async()=>{
        const users= await fetch(url);
        const response= await users.json().then((people)=>{
            console.log(people)
            const {login,id,avatar_url}=people
            setUser(login)
            setLoading(false)
        }).catch((err)=>{console.log(err);
        setIsError(true)})
        

    }
    if(loading)
    {
        return(
            <><h2>loading ..</h2>
            </>
          )
    }
    if(isError){
        return(
            <><h2>There is error ..</h2>
            </>
          )
    }
    return <div>
        <h1>{user}</h1>
    </div>
    
  
}
export default MultipleReturns