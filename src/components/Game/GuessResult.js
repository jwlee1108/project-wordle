import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "./Guess";
import { range } from "../../utils";

function GuessResult({ guessResult }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guessResult[index] ?? {
          id: crypto.randomUUID(),
          value: "",
        };

        return (
          <p className="guess" key={guess.id}>
            <Guess letters={guess.value} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessResult;
