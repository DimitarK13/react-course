import { useState } from 'react';

export default function Input({ label, handleUpdate }) {
  const [value, setValue] = useState(0);

  return (
    <p>
      <label>{label}</label>
      <input
        type='number'
        required
        value={value}
        onChange={(e) => {
          const newValue = e.target.value;
          setValue(newValue);
          handleUpdate(label, newValue);
        }}
        min={0}
      />
    </p>
  );
}
