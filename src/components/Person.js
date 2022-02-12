import React from "react";

function Person({person}) {
  return (
    <h2>
      I am {person.name}. I am {person.age}. I like {person.skill}.
    </h2>
  );
}

export default Person;
