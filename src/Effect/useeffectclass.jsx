import * as React from "react";
function fetchUser(){
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
        fetchUser().then((user) => 
        {
            setUser(user.name);
            setId(user.id);
        });
    }
    );return (
        <div>
           User Name: {user} <br />
           User ID: {id}
        </div>
    )
}
export default ApiSimulation;