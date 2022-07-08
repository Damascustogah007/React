import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <h3>{props.children}</h3>
      {/* <button onClick= {props.message}>Greet</button> */}
      <button onClick= {()=>props.message('Freda')}>Greet</button>
    </div>
  );
}

export default ChildComponent;
