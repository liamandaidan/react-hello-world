import React from "react";
import Person from "./Person";
function NameList() {
  //approach 1
  //   const names = ["Bruce", "Clark", "Diana"];

  //   return <div>{
  //       names.map(name => <h2>{name}</h2>)
  //       }</div>;
  // }
  //approach 2
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;
  //with more complicated
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  //this way is alright. but would be better if we turned it into a component
  //const personList = persons.map((person) => <h2>I am {person.name}. I am {person.age}. I like {person.skill}.</h2>);
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}
export default NameList;
