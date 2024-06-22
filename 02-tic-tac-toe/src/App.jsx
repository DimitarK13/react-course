import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function setActivePlayer(gameTurns) {
  let currPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currPlayer = 'O';

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currPlayer = setActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(row, col) {
    setGameTurns((prevTurns) => {
      let currPlayer = setActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row, col }, player: currPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' isActive={currPlayer === 'X'} />
          <Player name='Player 2' symbol='O' isActive={currPlayer === 'O'} />
        </ol>

        {winner && <p>You Won, {winner}!</p>}
        <GameBoard onSelectSqaure={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
