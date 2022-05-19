import React from 'react'

function Person({person}) {
  return (
    <div>
       <h5> My name is {person.name}, I am {person.age} years old and I am skilled in {person.skill}</h5>
    </div>
  )
}

export default Person
