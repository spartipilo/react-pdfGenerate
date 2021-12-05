import React, { useState } from "react";
import PdfGenerate from "./components/PdfGenerate";
import { inputs } from "./json/MapInput";
import "./style/App.css";

function App() {
  const [state, setState] = useState([]);

  let handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="inputs">
        {inputs.map((el, index) => (
          <input
            key={index}
            type={el.type}
            name={el.name}
            placeholder={el.placeholder}
            onChange={handleChange}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <textarea
          className="input__textaera"
          cols="60"
          rows="15"
          name="descrizione"
          placeholder="Cosa dichiari?"
          onChange={handleChange}
        ></textarea>
      </div>
      <PdfGenerate {...state} />
    </div>
  );
}

export default App;
