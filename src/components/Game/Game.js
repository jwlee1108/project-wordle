import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
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
      <div className="guess-results">
        {guessList.map((guess) => (
          <p className="guess" key={guess.id}>
            {guess.guess}
          </p>
        ))}
      </div>
    </>
  );
}

export default Game;
