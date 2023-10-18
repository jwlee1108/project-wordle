import React from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({
  guessResult,
  setGuessResult,
  gameResult,
  setGameResult,
  answer,
}) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        const reValidGuess = /^[A-Z]{5}$/;
        const isValidGuess = reValidGuess.test(guess);

        if (isValidGuess) {
          const checkResult = checkGuess(guess, answer);
          const newResultItem = { id: crypto.randomUUID(), value: checkResult };
          const nextGuessResult = [...guessResult];
          nextGuessResult.push(newResultItem);
          setGuessResult(nextGuessResult);

          if (checkResult.every((letter) => letter.status === "correct")) {
            setGameResult("win");
          } else if (nextGuessResult.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameResult("lose");
          }

          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={gameResult !== "undecided"}
        maxLength={5}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
