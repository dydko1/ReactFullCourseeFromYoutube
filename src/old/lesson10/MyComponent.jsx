import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("default value");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Miro");
  };

  const incrementAge = () => {
    setAge(age + 10);
  };

  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>
      <p> Age: {age}</p>
      <button onClick={incrementAge}>Increase age</button>
      <p>Is employed: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleIsEmployed}>Toggle employment</button>
    </div>
  );
}

export default MyComponent;
