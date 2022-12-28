import React from 'react';

import SquareBox from './SquareBox';

const GameBoard = ({ playerX, squareBoxes, onPlayerMove }) => {
  // Lifted state up
  // const [squareBoxes, setSquareBoxes] = useState(Array(9).fill(null));
  // const [playerX, setPlayerX] = useState(true);

  const clickHandler = (i) => {
    // Only allows player to make a move on an empty square; or,
    // Checks to see if there is a winner
    if (squareBoxes[i] || checkWinner(squareBoxes)) {
      return;
    }

    const nextSquareBoxes = squareBoxes.slice();

    playerX ? (nextSquareBoxes[i] = '❌') : (nextSquareBoxes[i] = '⭕️');

    // Replaced with a single call on the `onPlayerMove` function so the `TicTacToe` component can update the `GameBoard` when the user clicks a `squareBox`
    // setSquareBoxes(nextSquareBoxes);
    // setPlayerX(!playerX);

    onPlayerMove(nextSquareBoxes);
  };

  const isWinner = checkWinner(squareBoxes);
  let status;
  if (isWinner) {
    status = `Player ${isWinner} is the winner!`;
  } else {
    status = playerX ? `Player turn : ❌` : `Player turn : ⭕️`;
  }

  return (
    <div>
      <div className="board-square">
        <div className="board-row">
          <SquareBox
            value={squareBoxes[0]}
            onSquareBoxClick={() => clickHandler(0)}
          />
          <SquareBox
            value={squareBoxes[1]}
            onSquareBoxClick={() => clickHandler(1)}
          />
          <SquareBox
            value={squareBoxes[2]}
            onSquareBoxClick={() => clickHandler(2)}
          />
        </div>

        <div className="board-row">
          <SquareBox
            value={squareBoxes[3]}
            onSquareBoxClick={() => clickHandler(3)}
          />
          <SquareBox
            value={squareBoxes[4]}
            onSquareBoxClick={() => clickHandler(4)}
          />
          <SquareBox
            value={squareBoxes[5]}
            onSquareBoxClick={() => clickHandler(5)}
          />
        </div>

        <div className="board-row">
          <SquareBox
            value={squareBoxes[6]}
            onSquareBoxClick={() => clickHandler(6)}
          />
          <SquareBox
            value={squareBoxes[7]}
            onSquareBoxClick={() => clickHandler(7)}
          />
          <SquareBox
            value={squareBoxes[8]}
            onSquareBoxClick={() => clickHandler(8)}
          />
        </div>
      </div>

      <div className="game-status">{status}</div>
    </div>
  );
};

export default GameBoard;

const checkWinner = (squareBoxes) => {
  const lines = [
    // horizontal check
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical check
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal check
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squareBoxes[a] &&
      squareBoxes[a] === squareBoxes[b] &&
      squareBoxes[a] === squareBoxes[c]
    ) {
      return squareBoxes[a];
    }
  }

  return null;
};
