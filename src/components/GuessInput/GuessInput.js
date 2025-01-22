import React from 'react';

function UserInput() {
  const [guess, setGuess] = React.useState('');
  // pass as an object ?
  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert('Please enter exactly 5 characters 💖');
      return;
    }
    console.log({ guess });

    setGuess('');
  }
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={guess}
          title="Please enter a word with exactly 5 characters"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default UserInput;
