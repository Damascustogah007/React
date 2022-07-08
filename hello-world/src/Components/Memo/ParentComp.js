import React, { Component } from "react";
import MemoComp from "../Memo/MemoComp";

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
        name: "Charles",
      });
    }, 2000);
  }

  render() {
    console.log("****Parent component Render****");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
