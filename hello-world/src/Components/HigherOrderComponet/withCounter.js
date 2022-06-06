import React from "react";

const withCounter = WrappedComponent => {
  class withCounter extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
    
      incrementCount = () => {
        this.setState(prevState => {
          return {
            count: prevState.count + 1,
          };
        });
      };
    render() {
      return <WrappedComponent count = {this.state.count} Increment = {this.incrementCount} {...this.props}/>;
    }
  }
  return withCounter;
};
export default withCounter;

// Writing a function in a child component and reusing the function in the parent component by passing it as props in the parent component.