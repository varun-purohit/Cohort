import React, { useState } from "react";
import s from "./Assignment4.module.css";

function Assignment4() {
  const [wordCount, setWordCount] = useState(null);
  const [paragraph, setParagraph] = useState("");

  const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    // Add more words as needed
  ];
  const generateParagraph = () => {
    let generatedParagraph = "";
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      generatedParagraph += words[randomIndex] + " ";
    }

    // Remove the extra space at the end and capitalize the first letter
    generatedParagraph = generatedParagraph.trim();
    generatedParagraph =
      generatedParagraph.charAt(0).toUpperCase() + generatedParagraph.slice(1);

    // Add a period at the end of the paragraph
    generatedParagraph += ".";

    setParagraph(generatedParagraph);
  };

  return (
    <div className={s.container}>
      <h2>Para Generator</h2>
      <div className={s.input}>
        <input
          type="number"
          placeholder="Enter Number of Words"
          onChange={(event) => setWordCount(event.target.value)}
        />
        <button onClick={generateParagraph}>Generate</button>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

export default Assignment4;
