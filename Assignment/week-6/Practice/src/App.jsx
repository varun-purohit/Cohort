import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputValue] = useState(1);

  let count = 0;
  for (let i = 1; i <= inputvalue; i++) {
    count = count + i;
  }
  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
      />
      <p>
        Sum is from 1 to {inputvalue} is {count}{" "}
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
