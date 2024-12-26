import * as React from "react";
class Statexp extends React.Component { 
    state = {first: false,
             second: false
    };
    render() {
        const {first, second} = this.state;
        return(
            <div>
                <button disabled={first}>Button1</button>
                <button disabled={second}>Button2</button>
            </div>
        )
    }
}
export default Statexp;
