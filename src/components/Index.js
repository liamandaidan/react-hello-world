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
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
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
  //this causes an error sicne we dont have a key prop
  //we should use this if we do not have unique id
  //or will not change  and is a static list
  //never be reordered or filtered
  const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>);
  return <div>{nameList}</div>;
  //for solution we can use hashes or a plugin to generate uid
}
export default NameList;
