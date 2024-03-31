import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() {
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  const plus = (e) => { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  const minus = (e) => { 
  	
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  const  times = (e) => { 
    
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  const divide = (e) => { 
   
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  const resetInput = (e) => { 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  const resetResult= (e)=> { 
  	e.preventDefault();
    setResult((prevVal)=>prevVal * 0)  };
  return (
    <div className="App">
      <div> 
        <h1>Basic Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtraction</button> 
        <button onClick={times}>Multiplication</button> 
        <button onClick={divide}>Division</button> 
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset result</button> 
      </form> 
    </div>
  );
}

export default App;
