import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ guess, setGuess, guessResult, setGuessResult }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        const reValidGuess = /^[A-Z]{5}$/;
        const isValidGuess = reValidGuess.test(guess);

        if (isValidGuess) {
          const newGuess = { id: crypto.randomUUID(), value: guess };
          const nextGuessResult = [...guessResult];
          nextGuessResult.push(newGuess);

          setGuessResult(nextGuessResult);
          console.log(nextGuessResult);
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={guessResult.length >= NUM_OF_GUESSES_ALLOWED}
        maxLength={5}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
