import "./Assignment2.css";

const Assignment2 = () => {
  //
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
    <div className="color-palette">
      {colors.map((color) => {
        return (
          <button
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
              document.body.style.backgroundColor = selectedColor.toLowerCase();
            }}
            key={color}
          >
            {color}
          </button>
        );
      })}
    </div>
  );
};

export default Assignment2;
