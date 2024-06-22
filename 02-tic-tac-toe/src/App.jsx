import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';
import GameOver from './components/GameOver';
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
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurns, setGameTurns] = useState([]);

  const currPlayer = setActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((row) => [...row])];

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
      winner = players[firstSquareSymbol];
    }
  }

  const isDraw = gameTurns.length === 9 && !winner;

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

  function handleRematch() {
    setGameTurns([]);
  }

  function handleNameChange(symbol, newName) {
    setPlayers((prevValues) => {
      return { ...prevValues, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            onNameChange={handleNameChange}
            name='Player 1'
            symbol='X'
            isActive={currPlayer === 'X'}
          />
          <Player
            onNameChange={handleNameChange}
            name='Player 2'
            symbol='O'
            isActive={currPlayer === 'O'}
          />
        </ol>

        {(winner || isDraw) && (
          <GameOver onRematch={handleRematch} winner={winner} />
        )}
        <GameBoard onSelectSqaure={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
