import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCustomCounter from "./useCustomCounter";
import "./index.css";
import minusBtn from "./assets/minusBtn.png";
import plusBtn from "./assets/incrementBtn.png";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const CustomCounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCustomCounter();
  const [inputValue, setInputValue] = useState("");

  const handleSetValue = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
      setInputValue("");
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <div className="counterbody">
      <Navbar />
      <main>
        <div className="countervalue">
          <p className="count"> {count}</p>
        </div>
        <div className="buttons">
          <div className="btn">
            <img onClick={decrement} src={minusBtn} alt="minusBtn" />
            <button onClick={reset} className="reset">
              Reset
            </button>
            <img onClick={increment} src={plusBtn} alt="plusBtnBtn" />
          </div>
        </div>
        <div className="setvalue">
          <input
            placeholder="Enter a value of your choice"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSetValue}>Set Value</button>
        </div>
      </main>
      <div className="back"> <p><Link className="link" to="/">Homepage</Link></p></div>

      <Footer />
    </div>
  );
};

export default CustomCounterPage;
