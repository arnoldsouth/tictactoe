import './TicTacToe.css';

import React, { useState } from 'react';

import GameBoard from './GameBoard';

const TicTacToe = () => {
  // const [squareBoxes, setSquareBoxes] = useState(Array(9).fill(null));
  const [moveHistory, setMoveHistory] = useState([Array(9).fill(null)]);
  const [currentPlayerMove, setCurrentPlayerMove] = useState(0);

  // https://beta.reactjs.org/learn/tutorial-tic-tac-toe#final-cleanup
  // const [playerX, setPlayerX] = useState(true);
  const playerX = currentPlayerMove % 2 === 0;

  // To render the squares for the current move, we want to read the last squares array from the `moveHistory`
  const currentSquareBoxes = moveHistory[currentPlayerMove];

  const playerMoveHandler = (nextSquareBoxes) => {
    const nextMoveHistory = [
      ...moveHistory.slice(0, currentPlayerMove + 1),
      nextSquareBoxes,
    ];
    setMoveHistory(nextMoveHistory);
    setCurrentPlayerMove(nextMoveHistory.length - 1);
    // https://beta.reactjs.org/learn/tutorial-tic-tac-toe#final-cleanup
    // setPlayerX(!playerX);
  };

  const goToMove = (nextMove) => {
    setCurrentPlayerMove(nextMove);
    // https://beta.reactjs.org/learn/tutorial-tic-tac-toe#final-cleanup
    // setPlayerX(nextMove % 2 === 0);
  };

  const playerMoves = moveHistory.map((squareBoxes, playerMove) => {
    let moveDescription;

    if (playerMove > 0) {
      moveDescription = `Go to move: ${playerMove}`;
    } else {
      moveDescription = `Go to start`;
    }

    return (
      <li key={playerMove}>
        {moveDescription}
        <button
          className="game-info-button"
          onClick={() => {
            goToMove(playerMove);
          }}
        >
          {/* {moveDescription} */}➡
        </button>
      </li>
    );
  });

  return (
    <div className="app-container">
      <div>
        <div className="title">
          Tic<div className="xo-title">❌</div>Tac
          <div className="xo-title">⭕️</div>Toe
        </div>

        <div className="game">
          <GameBoard
            playerX={playerX}
            squareBoxes={currentSquareBoxes}
            onPlayerMove={playerMoveHandler}
          />
        </div>

        <div>
          <div className="game-info">
            <ol>{playerMoves}</ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
