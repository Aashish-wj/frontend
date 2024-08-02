// src/App.js
import React, { useState } from "react";
import TextInput from "./components/TextInput";
import DropdownMenu from "./components/DropdownMenu";
import DisplayResults from "./components/DisplayResults";

function App() {
  const [responseData, setResponseData] = useState(null);
  const [visibility, setVisibility] = useState({
    characters: true,
    numbers: true,
    highestAlphabet: true,
  });

  return (
    <div className="App">
      <h1>RA2111028010057</h1>
      <TextInput onSubmit={setResponseData} />
      {responseData && (
        <>
          <DropdownMenu onToggle={setVisibility} />
          <DisplayResults data={responseData} visibility={visibility} />
        </>
      )}
    </div>
  );
}

export default App;
