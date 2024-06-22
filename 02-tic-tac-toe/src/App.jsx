import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

function setActivePlayer(gameTurns) {
  let currPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') currPlayer = 'O';

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currPlayer = setActivePlayer(gameTurns);

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

        <GameBoard onSelectSqaure={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
