import React from 'react';
import './myStyle.css';

function styleSheet(props) {
  let color = props.color ? 'primary' : 'secondary'
  return (
    <div>
       <h2 className= {`${color} font-xl`}>
         Welcome Guest!
       </h2>
    </div>
  )
}

export default styleSheet
