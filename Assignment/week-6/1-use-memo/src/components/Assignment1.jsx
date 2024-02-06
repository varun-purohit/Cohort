import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  let expensiveValue = 0;

  const expensive = useMemo(() => {
    if (input == 0) {
      expensiveValue = 1;
    } else {
      let fact = 1;
      for (let i = 1; i <= input; i++) {
        fact *= i;
      }
      expensiveValue = fact;
    }
    return expensiveValue;
  }, [input]);

  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensive}</p>
    </div>
  );
}
