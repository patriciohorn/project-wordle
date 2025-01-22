import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {/* Accesing a value[num] when value is undefined or the array is empty will throw an error. I first check if value exists before trying to access value[num]. I explicitly set the fallback to undefined  */}
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
