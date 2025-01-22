import React from 'react';
import GuessInput from '../GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]); // store all the guesses by the user and will pass it to the results

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResult guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
