import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(() => setResult(0));
  }

  return (
    <div className="App">
      <h1 className="Titles">Basic Calculator</h1>
      <div className="Results">
        <h3 ref={resultRef}>Result : {result}</h3>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type here"
        />
      </div>
      <form className="Button">
        <button onClick={plus} className="col">
          add
        </button>
        <button onClick={minus} className="col">
          subtract
        </button>
      </form>
      <form className="Button">
        <button onClick={times} className="col">
          multiply
        </button>
        <button onClick={divide} className="col">
          divide
        </button>
      </form>
      <form className="Button">
        <button onClick={resetInput} className="col-single">
          resetInput
        </button>
      </form>
      <form className="Button">
        <button onClick={resetResult} className="col-single">
          resetResult
        </button>
      </form>
    </div>
  );
}

export default App;
