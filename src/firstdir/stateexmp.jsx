import { useState } from "react";
function StateExmpl () {
    const [name] = useState("RKU");
    const [age] = useState(45);
    return(
        <div>
            <h1>{name}</h1>
            <br />
        <h2>{age}</h2>
        </div>
    );
}
export default StateExmpl;