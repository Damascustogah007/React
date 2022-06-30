// import React from "react";
import React, { Component } from "react";

// Two ways to destructure

// const Greetings = ({name , heroName}) => {
//   return (
//     <div>
//       <h1>
//         My name is {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

// const Greetings = (props) => {
//     const {name , heroName} = props;
//     return (
//       <div>
//         <h1>
//           My name is {name} a.k.a {heroName}
//         </h1>
//       </div>
//     );
//   };

class Greeting extends Component {
  render() {
    const { name, heroName } = this.props;
    //   for states
    // const {name , heroName} = this.state
    return (
      <div>
        <h1>
          My name is {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}

export default Greeting;
