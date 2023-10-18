import React from "react";

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
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
