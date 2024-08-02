// src/components/DropdownMenu.js
import React, { useState } from "react";

const DropdownMenu = ({ data, onToggle }) => {
  const [selected, setSelected] = useState({
    characters: true,
    numbers: true,
    highestAlphabet: true,
  });

  const handleToggle = (section) => {
    setSelected((prev) => {
      const newSelected = { ...prev, [section]: !prev[section] };
      onToggle(newSelected);
      return newSelected;
    });
  };

  return (
    <div>
      <h3>Choose Sections to Display:</h3>
      <label>
        <input
          type="checkbox"
          checked={selected.characters}
          onChange={() => handleToggle("characters")}
        />
        Characters
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected.numbers}
          onChange={() => handleToggle("numbers")}
        />
        Numbers
      </label>
      <label>
        <input
          type="checkbox"
          checked={selected.highestAlphabet}
          onChange={() => handleToggle("highestAlphabet")}
        />
        Highest Alphabet
      </label>
    </div>
  );
};

export default DropdownMenu;
