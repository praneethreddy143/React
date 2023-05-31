import React, {useState} from "react";
import { data } from "../../data";
const UseArray=()=>{
    const [people,setPeople]= useState(data)
    const removeItem=(id)=>{
        let newPeople=people.filter((data)=>data.id !== id)
        setPeople(newPeople)
    }
    return (<React.Fragment>
        {people.map((data)=> {
            const {id,name}=data
            return(<div key={id} className="item">
                <h4>{name}</h4>
                <button onClick={()=>removeItem(id)}>removeItem</button>
            </div>)})}
            <button className="btn" onClick={()=>setPeople([])}>clear items</button>
    </React.Fragment>)
}

export default UseArray