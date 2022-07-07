import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Charles",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "charles",
      });
    }, 2000);
  }

  render() {
    console.log('****Parent component Render****')
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
