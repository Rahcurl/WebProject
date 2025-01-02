import * as React from "react";

class MyPropButton extends React.Component {
    render() {
        const { xyz, abc } = this.props; // Destructure 'xyz' and 'abc' from props
        return (
            <button disabled={xyz}>{abc}</button>  // Disable button based on 'xyz' prop
        );
    }
}

export default MyPropButton;
