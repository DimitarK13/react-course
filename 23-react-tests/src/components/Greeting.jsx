import { useState } from 'react';
import Output from './Output';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>IT's good to see u</Output>}
      {changedText && <Output>Changed!!</Output>}
      <button onClick={() => setChangedText(true)}>ChangeText!</button>
    </div>
  );
}
