//  In this file I am learning conditions
//  if/else
//  tenary


import React, { Component } from "react";

class userGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Mr. Charles</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}

// Tenary Operator
// isLoggedIn ?
// <div>Welcome Mr. Charles</div> :
// <div>Welcome Guest</div>

export default userGreeting;
