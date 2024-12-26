import * as React from "react";
class Objiterexp extends React.Component { 
    state = {first: "Loading...",
             second: "Loading...",
             third: "Loading...",
             fourth: "Loading...",
             donemsg:"Loading complete"
    };
    constructor() {
        super();
        setTimeout(() => {
            this.setState({first: "done"});
        }, 2000);  

        setTimeout(() => {
            this.setState({second: "done"});
        }, 4000);  
        setTimeout(() => {
            this.setState({third: "done"});
        }, 6000);  
        setTimeout(() => {
            this.setState({donemsg: "done"});
        }, 9000);  
        setTimeout(() => {
            this.setState({fourth: "done"});
        }, 9000); 
        setTimeout(() => {
            this.setState((state)=>({...state,
                fifth:state.donemsg,
            }));
        }, 10000); 
    }
   
}
export default Objiterexp;
