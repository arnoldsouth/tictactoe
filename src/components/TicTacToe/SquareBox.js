import React from 'react';

const SquareBox = ({ value, onSquareBoxClick }) => {
  // const [value, setValue] = useState(null);

  // const clickHandler = () => {
  //   setValue('❌');
  // };

  return (
    <div>
      <button
        className="square"
        onClick={onSquareBoxClick}
      >
        {value}
      </button>

      {/* <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>

        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>

        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div> */}
    </div>
  );
};

export default SquareBox;
