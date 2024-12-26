import * as React from "react";
class Statexp2 extends React.Component { 
    state = {first: false,
             second: true,
             txt: "initial value",
             clr:"red"
    };
    constructor() {
        super();
        setTimeout(() => {
            this.setState({first: true, second:false, txt:"Updated value",clr:"blue"});
        }, 10000);  

        setTimeout(() => {
            this.setState({first: true, second:false, txt:"Updated value after update",clr:"green"});
        }, 12000);  
    }
    render() {
        const {first, second, txt,clr} = this.state;
        return(
            <div>
                <button disabled={first}>Button1</button>
                <button disabled={second}>Button2</button>
                <label style={{color: clr}}>{txt}</label>
                <input value={txt} />
            </div>
        )
    }
}
export default Statexp2;
