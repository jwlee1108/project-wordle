import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const coreections = checkGuess(guess, answer) ?? "";

  return (
    <>
      {range(0, 5).map((index) => {
        const correction = coreections[index] ?? { letter: "", status: "" };

        return (
          <span className={`cell ${correction.status}`} key={index}>
            {correction.letter ?? ""}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
