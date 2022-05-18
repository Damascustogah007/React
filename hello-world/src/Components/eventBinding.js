import React, { Component } from "react";

// Two ways to do it

class eventBind extends Component {
  constructor() {
    super()
    this.state = {
      message: "Welcome!"
    }
    // this.eventBind = this.clickHandler.bind(this)
    // console.log(this.eventBind)
  }

//   clickHandler() {
//     this.setState({
//       message: "Goodbye!",
//     });
//   }

clickHandler = () => {
    this.setState({
        message : 'GoodBye!'
    })
}

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default eventBind;
