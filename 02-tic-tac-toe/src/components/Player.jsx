import { useState } from 'react';

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) onNameChange(symbol, playerName);
  };

  return (
    <li className={isActive ? 'active' : ''}>
      <span className='player'>
        {!isEditing && <span className='player-name'>{playerName}</span>}
        {isEditing && (
          <input
            type='text'
            required
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        )}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
