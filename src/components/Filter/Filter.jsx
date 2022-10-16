import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Search for contacts</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
