import React from "react";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
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
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessList={guessList}
        setGuessList={setGuessList}
      />
      <GuessResult guessList={guessList} />
    </>
  );
}

export default Game;
