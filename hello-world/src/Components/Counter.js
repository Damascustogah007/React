import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countNum() {
    this.setState(prevState =>({
        count : prevState.count + 1
    }))
    console.log(this.state.count);
}

incrementFive(){
    this.countNum();
    this.countNum();
    this.countNum();
    this.countNum();
    this.countNum();
}

  render() {
    return (
      <div>
        <p>Count - {this.state.count}</p>
        <button onClick={()=> this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter;
