import React, { useState } from 'react'
import './App.css';


function App() {
  const [input, setInput] = useState("")
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const hadleCalculation = () => {
    setInput(eval(input))
  }

  const handleClear = () => {
    setInput(" ")
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <h1 style={{ color: "white" }}>My Calculator</h1>
        <div className="calculator">
          <input className="inputStyle" type="text" name="input" value={input}
            onChange={handleChange} placeholder="start calculating" />
          <button className="btn btn-primary" onClick={hadleCalculation}>Result</button>
          <button className='btn btn-danger ml-2' onClick={handleClear}>Clear</button>
          <br />

          <div className='mt-5'>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '1')}>1</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '2')}>2</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '3')}>3</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '4')}>4</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '5')}>5</button>
            <br />
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '6')}>6</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '7')}>7</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '8')}>8</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '9')}>9</button>
            <button className='btn btn-secondary btnStyle' onClick={() => setInput(input + '0')}>0</button>
            <br />
            <button className='btn btn-primary btnStyle' onClick={() => setInput(input + '+')}>+</button>
            <button className='btn btn-dark btnStyle' onClick={() => setInput(input + '-')}>-</button>
            <button className='btn btn-success btnStyle' onClick={() => setInput(input + '*')}>*</button>
            <button className='btn btn-warning btnStyle' onClick={() => setInput(input + '/')}>/</button>
            <button className='btn btn-info btnStyle' onClick={() => setInput(input + '%')}>%</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
