import { useState } from "react";
function StateExmpl () {
    const [name,setName]=useState("RKU");
    const [age,setAge] = useState(45);
    const [color,setColor] = useState("red");
    return(
        <div>
            <input
            value ={name}
            onChange={(e) => setName(e.target.value)} 
             />
            <h1>{name}</h1>
            <br />
        <input 
            type="number" 
            value={age}
            onChange={(e) => setAge(e.target.value)} 
        ></input>
        <p style={{background : color,height :50}}>Age of candidate is :{age}</p>
        <input
            type="radio"
            name="C1"
            onChange={() => setColor("blue")} 
        />
         <input
            type="radio"
            name="C1"
            onChange={() => setColor("green")} 
        />
         <input
            type="radio"
            name="C1"
            onChange={() => setColor("yellow")} 
        />
        {color}
            <br />
        </div>
    );
}
export default StateExmpl;