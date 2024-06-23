import { useState } from 'react';

export default function Input({ label }) {
  const [value, setValue] = useState();

  return (
    <div>
      <label>{label}</label>
      <input
        type='number'
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
