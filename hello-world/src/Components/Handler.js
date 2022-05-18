// import React from 'react'
import React, { Component } from "react";

// Two ways of doing this function and class
// function functionHandler() {
//    function clickHandler(){
//      console.log("Button Clicked!");
//    }
//   return (
//     <div>
//       <button onClick={clickHandler}>
//           click
//       </button>
//     </div>
//   )
// }

class functionHandler extends Component {
  clickHandler(){
    console.log("Button Clicked!")
  }
  render() {
    return(
      <div>
        <button onClick={this.clickHandler}>
          click me
        </button>
      </div>
    )
  }
}

export default functionHandler;
