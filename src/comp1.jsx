import * as React from "react";
class MyComponent extends React.Component {
render() { return <div> Go ahead!
    <h1>Hello World!</h1>
    <p>This is a simple React component.</p>
    <button onClick={() => alert('Button clicked!')}>Click Me!</button>
    <input type="text" placeholder="Type something" />
    <input type="checkbox"></input>
    <input type="Radio"></input>
    <ul>
        <li>React</li>
        <li>Vite 2</li>
        <li>Node 3</li>
    </ul>
    <footer>
        <p>&copy; ~Rahcurl. All rights reserved.</p>
    </footer>
    
</div>;
    }
}
export default MyComponent;