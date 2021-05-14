import React from 'react';
import "./Counter.css";

const Counter = () => {
  // const stateArray = React.useState(0);
  // const count = stateArray[0];
  // const setCount = stateArray[1];
  const [count, setCount] = React.useState(0);

  function increase() {
    // setCount(count + 1);
    
    // setCount(prevCount => {
    //   return prevCount + 1;
    // });
    
    // setCount(function(prevCount) {
    //   return prevCount + 1;
    // })

    setCount(prevCount => prevCount + 1);
  }

  function decrease() {
    // setCount(count - 1);

    setCount(prevCount => {
      if (prevCount <= 0) {
        return 0;
      }
      
      return prevCount - 1;
    })
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <p className="counter-count">{count}</p>
      <div className="counter-controls">
        <button onClick={increase} className="counter-btn">Increase</button>
        <button onClick={decrease} className="counter-btn">Decrease</button>
        <button onClick={reset} className="counter-btn">Reset</button>
      </div>
    </div>
  )
}

export default Counter;