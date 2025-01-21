import { useState, useEffect } from "react";
import { Promise } from "bluebird";
Promise.config({ cancellation: true });
function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "John Doe", id: 30});
        }, 5000);
    });
}
function NewComponent1(){
    const [id, setID] = useState("loading...");
    const [name, setName] = useState("loading...");
    useEffect(() => {
        const promise = fetchUser().then((var1) => {
            setID(var1.id);
            setName(var1.name);
        });
        return () => {
            promise.cancel();
        };
    });
    return (
        <div>
            User Id: {id}, <br />
            Name: {name}
        </div>
    );
}
export default NewComponent1;

//1. create carousel(image changer)
//using useeffect.Place 4 images
//in public directory and
//change image at interval of 4 seconds  

//2. implement count down timer
//using useEffect 5:00 4:59 4:00
//3:59 3:00