import React from "react";
import Person from '../List rendering/person'

function ListRendering() {
  // const names = ['Bruce', 'Diana', 'Clark']
  // const nameList = names.map(name => <h2>{name}</h2>)

  const persons = [
    {
      id: 0,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 1,
      name: "Diana",
      age: 30,
      skill: "Angular",
    },
    {
      id: 2,
      name: "Clark",
      age: 30,
      skill: "Vue",
    },
  ];

  const personList = persons.map(person =><Person person = {person} />)

  return <div>{personList}</div>;
}

export default ListRendering;
