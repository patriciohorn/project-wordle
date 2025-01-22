import React from 'react';

function UserInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault(); // stop reloading the page
          handleSubmitGuess(tentativeGuess); // passing user guess to our handleSubmit on the parent
          setTentativeGuess(''); // reset input to be empty
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          title="5 letter word 😯"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default UserInput;
