import React, { useState } from "react";
import { KeyPad, Result } from "./components";

import "./App.css";

function App() {
  const [result, setResult] = useState("");

  // Calculate total
  const calculate = () => {
    var checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }

    try {
      // eslint-disable-next-line
      setResult((eval(checkResult) || "") + "");
    } catch (e) {
      setResult("Error");
    }
  };

  // Reset the calculation
  const reset = () => {
    setResult("");
  };

  // Remove last value
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  // This will be triggered when
  // specific button is clicked
  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  return (
    <div>
      <div className="calculator-body">
        <h1>Calculator</h1>
        <Result result={result} />
        <KeyPad onClick={(button) => onClick(button)} />
      </div>
    </div>
  );
}

export default App;
