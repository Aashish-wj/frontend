// src/components/TextInput.js
import React, { useState } from "react";
import axios from "axios";

const TextInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const parsedInput = JSON.parse(input);
      if (!Array.isArray(parsedInput.data)) {
        throw new Error("Invalid data format");
      }

      const response = await axios.post(
        "https://bajaj-backend-ll5g.onrender.com/bfhl",
        parsedInput
      );
      onSubmit(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={input} onChange={handleChange} rows="4" cols="50" />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextInput;
