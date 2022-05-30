import React from 'react'

function person({person}) {
  return (
    <div>
      <h3>
        I am {person.name}, I am {person.age} years old and I am highly skilled in {person.stack}
      </h3>
    </div>
  )
}

export default person
