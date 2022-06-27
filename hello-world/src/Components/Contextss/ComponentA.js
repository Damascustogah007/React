import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB/>
      </div>
    )
  }
}

export default ComponentA


// Context provides a way to pass data through the component tree without having tompass props down manually at every level.
// Steps:
// Create the context
// Provide a context value
// Consume the context value in the necessary components