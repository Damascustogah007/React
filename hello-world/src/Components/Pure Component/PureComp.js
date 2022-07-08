import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log('Pure component Render')
    const {name} = this.props
    return (
      <div>
        Pure Component {name}
      </div>
    );
  }
}

export default PureComp;

// A pure component does not re-render while parent and regular component re-renders
