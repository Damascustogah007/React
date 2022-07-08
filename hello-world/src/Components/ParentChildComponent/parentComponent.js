import React, { Component } from "react";
import ChildComponent from "./childComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mr. Charles!",
    };
    this.greetings = this.greetComponent.bind(this);
  }
  greetComponent(GFName) {
    alert(`Hello, ${this.state.name} from ${GFName}`);
  }

  render() {
    return (
      <ChildComponent message={this.greetings}>
        This Is Really Awesome!
      </ChildComponent>
    );
  }
}

export default ParentComponent;
