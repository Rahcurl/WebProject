import * as React from 'react'

// Class-based component Xyz
export class Xyz extends React.Component {
  render() {
    return (
      <div>
        <h1>component1</h1>
        <h2>component1</h2>
        <h3>component3</h3>
        <Abc />
      </div>
    )
  }
}

// Class-based component Abc
class Abc extends React.Component {
  render() {
    return (
      <div>
        <h1>component2</h1>
        <Aaa />
        <h2>component2</h2>
        <h3>component3</h3>
      </div>
    )
  }
}

// Class-based component Aaa
class Aaa extends React.Component {
  render() {
    return (
      <div>
        <h1>component3</h1>
        <h2>component2</h2>
        <h3>component3</h3>
      </div>
    )
  }
}

export default Xyz
