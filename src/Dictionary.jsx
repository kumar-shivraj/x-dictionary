import { useState } from "react";

function Dictionary() {
  const [definition, setDefinition] = useState("");
  const [input, setInput] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleInput = () => {
    const wordDefinition = dictionary.find(
      (ele) => ele.word.toLowerCase() === input.toLowerCase()
    );
    const foundDefinition = wordDefinition
      ? wordDefinition.meaning
      : "Word not found in the dictionary.";
    setDefinition(foundDefinition);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleInput}>Search</button>
      </div>
      <div>
        <h4>Definition:</h4>
        <div>{definition}</div>
      </div>
    </div>
  );
}

export default Dictionary;
