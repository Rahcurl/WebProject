import * as React from "react";

class MyPropList extends React.Component {
    render() {
        const { itms } = this.props; // Destructure the 'itms' prop
        return (
            <ul>
                {itms.map((i, index) => (
                    <li key={index}>{i}</li> // Use the index as key if items are not unique
                ))}
            </ul>
        );
    }
}

export default MyPropList;
