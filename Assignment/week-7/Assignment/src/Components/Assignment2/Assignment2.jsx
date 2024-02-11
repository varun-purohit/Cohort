import { useState } from "react";
import "./Assignment2.css";

const Assignment2 = () => {
  const [bgColor, setBgColor] = useState("");
  const colors = [
    "Red",
    "Yellow",
    "Black",
    "Purple",
    "Green",
    "Blue",
    "Default",
  ];

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="color-palette">
        {colors.map((color) => {
          return (
            <button
              key={color}
              style={{
                backgroundColor: color == "Default" ? "orange" : `${color}`,
              }}
              value={color}
              onClick={function handleColor(e) {
                e.preventDefault();
                console.log(e.target.value);
                let selectedColor = e.target.value;
                if (selectedColor == "Default") {
                  selectedColor = "orange";
                }
                setBgColor(selectedColor);
              }}
            >
              {color}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Assignment2;
