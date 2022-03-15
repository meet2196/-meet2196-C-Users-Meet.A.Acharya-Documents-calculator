
import react, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import {square} from "mathjs";
import { cube } from "mathjs"

function App() {
  const [result, setResult] = useState("");
  const handleClick = e => {
    setResult("");
    setResult(result.concat(e.target.name));
  };
  console.log(typeof result);
  //clear
  const clear = () => {
    setResult("");
  };

  const symbol = ["+", "-", "/", "*"];

  //backSpace
  const backSpace = () => {
    setResult(result.slice(0, -1));
  };
  
  const squarefun = () => {
    console.log(result);
    setResult(square(Number(result)));
    console.log(result);
  }


  const cubefun = () => {
    setResult(cube(Number(result)));
    console.log(result);
  }

  //calculate
  const calc = () => {
    try {
      setResult(Number(evaluate(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }

    
  };

  return (
    <>
      <div class="container">
        <h1 class="title">React Calculator</h1>
        <div class="calculator">
          <input type="text" class="calc-numbers" value={result} />
          <div class="calculator-buttons">
            <button onClick={clear} class="btn clear span-2">
              C
            </button>
            <button onClick={backSpace} class="btn blue ">
              &larr;
            </button>
            <button onClick={handleClick} name="/" class="btn blue ">
              &divide;
            </button>
            <button onClick={handleClick} name="7" class="btn">
              7
            </button>
            <button onClick={handleClick} name="8" class="btn">
              8
            </button>
            <button onClick={handleClick} name="9" class="btn">
              9
            </button>
            <button onClick={handleClick} name="*" class="btn blue">
              x
            </button>
            <button onClick={handleClick} name="4" class="btn">
              4
            </button>
            <button onClick={handleClick} name="5" class="btn">
              5
            </button>
            <button onClick={handleClick} name="6" class="btn">
              6
            </button>
            <button onClick={handleClick} name="-" class="btn blue">
              -
            </button>
            <button onClick={handleClick} name="1" class="btn">
              1
            </button>
            <button onClick={handleClick} name="2" class="btn">
              2
            </button>
            <button onClick={handleClick} name="3" class="btn">
              3
            </button>
            <button onClick={handleClick} name="+" class="btn blue">
              +
            </button>
            <button onClick={handleClick} name="0" class="btn span-3">
              0
            </button>
            <button onClick={squarefun} name="" class="btn blue">
            x<sup>2</sup>
            </button>
            <button onClick={cubefun} name="" class="btn blue">
            x<sup>3</sup>
          </button>
            <button onClick={calc} name="=" class="btn blue equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
