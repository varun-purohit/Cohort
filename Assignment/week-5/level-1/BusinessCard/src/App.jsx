import BusinessCard from "./BusinessCard";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState("");
  const [cards, setCards] = useState([]);

  function handleClick() {
    console.log(interests);
    if (name.trim() !== "" && description.trim() !== "") {
      const newCard = { name, description, interests };
      setCards([...cards, newCard]);
    }
  }

  return (
    <>
      <div className="input_container">
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Interests"
          onChange={(e) => {
            let interestValue = e.target.value;
            let finalValue = interestValue.split(",");
            setInterests(finalValue);
          }}
        />
        <button onClick={handleClick} className="">
          Create Card
        </button>
      </div>

      <div>
        {cards?.map(function (card, index) {
          return (
            <div className="container" key={index}>
              <h1 className="name">{card?.name}</h1>
              <p className="desc">{card?.divdescription}</p>
              <h3>Interests</h3>
              <div className="int-list">
                {card.interests.map((interest, index) => {
                  return (
                    <span className="int" key={index}>
                      {interest}
                    </span>
                  );
                })}
              </div>
              <div>
                <FaSquareXTwitter
                  style={{ margin: "10px 5 10px 0" }}
                  color="black"
                  size={30}
                />

                <FaLinkedin
                  style={{ margin: "10px 5 10px 0" }}
                  color="#0077b5"
                  size={30}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
