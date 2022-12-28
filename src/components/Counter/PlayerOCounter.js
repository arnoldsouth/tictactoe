import React, { useState } from 'react';

const PlayerOCounter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <div className="app-container">
      <div className="app-container">
        <button
          className="increment-decrement-button"
          onClick={decrementHandler}
        >
          ➖
        </button>
        ⭕️ Wins : {count}
        <button
          className="increment-decrement-button"
          onClick={incrementHandler}
        >
          ➕
        </button>
      </div>
      {/* <div className="app-container">
        <button
          className="button"
          onClick={decrementHandler}
        >
          -
        </button>
        Counter: {count}
        <button
          className="button"
          onClick={incrementHandler}
        >
          +
        </button>
      </div> */}
    </div>
  );
};

export default PlayerOCounter;
