import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log('Regular component Render')
    const {name} = this.props
    return <div>Regular Component {name}</div>;
  }
}

export default RegularComp;
