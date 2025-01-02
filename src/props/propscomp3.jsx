import * as React from "react";
import MyPropButton from "./propscomp1";  // Importing MyPropButton
import MyPropList from "./propscomp2";    // Importing MyPropList

class PropExmp extends React.Component {
  state = {
    var1: true,              // Disable button
    var2: "Hello Rahcurl",   // Text to display on the button
    var4: [1, 2, 3, 4, 5],   // Items to display in the list
  };

  render() {
    const { var1, var2, var4 } = this.state;  // Destructuring state values
    return (
      <div>
        <MyPropButton xyz={var1} abc={var2} />  {/* Passing state values to MyPropButton */}
        <MyPropList itms={var4} />              {/* Passing the list to MyPropList */}
      </div>
    );
  }
}

export default PropExmp;
