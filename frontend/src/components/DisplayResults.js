// src/components/DisplayResults.js
import React from "react";

const DisplayResults = ({ data, visibility }) => {
  return (
    <div>
      {visibility.characters && (
        <div>
          <h3>Characters:</h3>
          <ul>
            {data.alphabets.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </div>
      )}

      {visibility.numbers && (
        <div>
          <h3>Numbers:</h3>
          <ul>
            {data.numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}

      {visibility.highestAlphabet && (
        <div>
          <h3>Highest Alphabet:</h3>
          <p>{data.highest_alphabet.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default DisplayResults;
