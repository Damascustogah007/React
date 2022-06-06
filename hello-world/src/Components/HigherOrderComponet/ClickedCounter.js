import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickedCounter extends Component {
  render() {
      const {count, Increment} = this.props;
    return (
      <div>
        <button onClick={Increment}>Clicked {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickedCounter);
