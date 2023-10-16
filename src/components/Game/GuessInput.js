import React from "react";

function GuessInput({ guess, setGuess, guessList, setGuessList }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        const reValidGuess = /^[A-Z]{5}$/;
        const isValidGuess = reValidGuess.test(guess);

        if (isValidGuess) {
          const currGuess = { id: crypto.randomUUID(), guess };
          const nextGuessList = [...guessList];
          nextGuessList.push(currGuess);
          console.log(currGuess);

          setGuessList(nextGuessList);
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
