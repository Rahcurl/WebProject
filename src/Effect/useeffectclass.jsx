import * as React from "react";
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name: "John Doe", id: "123"});
        }, 3000);
    })
}

function ApiSimulation(){
    const [user,setUser] =React.useState("Loading");
    const[id,setId] = React.useState("Loading");
    React.useEffect(()=>{
        fetchData().then((user) => 
        {
            setUser(user.name);
            setId(user.id);
        });
    }
    );
    return (
        <div>
            <li>
            <ul>
            User Name: {user} <br />
            User ID: {id}
        </ul>
            </li>
        </div>
    )
}
export default ApiSimulation;

//create a component which will return 
//unordered list passed fetch data()
//resolve promise with list/array of strings