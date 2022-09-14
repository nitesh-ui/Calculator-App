import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const handleClick = (e) => {
    setResult(result + e.target.name);
  }

  const backSpace = () => {
    setResult(result.slice(0, result.length-1));
  }

  const clear = () => {
    setResult("");
  }

  const calculateResult = () => {
    setResult(eval(result).toString());
  }

  return (
    <div className="calculator-app">
      <form>
        <input type="text" value={result} ref={inputRef} />
      </form>

      <div className="keypad">
        <button id="clear" onClick={clear}>Clear</button>
        <button id="backspace" onClick={backSpace}>C</button>
        <button name="+" onClick={handleClick}>+</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="-" onClick={handleClick}>-</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="*" onClick={handleClick}>*</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="/" onClick={handleClick}>/</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button id="result" onClick={calculateResult}>Result</button>
      </div>
    </div>
  );
}

export default App;
