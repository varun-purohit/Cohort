import { useState } from "react";
import s from "./Assignment7.module.css";

const Assignment7 = () => {
  const [input, setInput] = useState("");
  return (
    <div className={s.container}>
      <div className={s.details}>
        <h1>Enter Your Name</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Done</button>
      </div>
    </div>
  );
};

export default Assignment7;
