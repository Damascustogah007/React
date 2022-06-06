import React, { Component } from "react";
// import Person from "./person";

export class ListRendering extends Component {
  render() {
    const Persons = [
      {
        id: 1,
        name: "Bruce",
        age: 26,
        stack: "React",
      },
      {
        id: 2,
        name: "Wayne",
        age: 27,
        stack: "Angular",
      },
      {
        id: 3,
        name: "Willis",
        age: 28,
        stack: "Vue",
      },
    ];
    const personList = Persons.map((person, index) => (
      // <Person key={index} person={person}></Person>
      <h3>
        {index}. I am {person.name}, I am {person.age} years old and I am highly
        skilled in {person.stack}
      </h3>
    ));

    return <div>{personList}</div>;
  }
}

export default ListRendering;
