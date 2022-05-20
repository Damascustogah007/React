import React from 'react'

function person({person}, props) {
  return (
    <div>
      <h3>
        {props.children}.I am {person.name}, I am {person.age} years old and I am highly skilled in {person.stack}
      </h3>
    </div>
  )
}

export default person
