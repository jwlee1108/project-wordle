import React from "react";
import GuessInput from "./GuessInput";
import GuessResult from "./GuessResult";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "./Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResult, setGuessResult] = React.useState([]);
  const [gameResult, setGameResult] = React.useState("undecided");

  return (
    <>
      <GuessResult guessResult={guessResult} />
      {gameResult !== "undecided" && (
        <Banner
          gameResult={gameResult}
          guessCount={guessResult.length}
          answer={answer}
        />
      )}
      <GuessInput
        answer={answer}
        guessResult={guessResult}
        setGuessResult={setGuessResult}
        gameResult={gameResult}
        setGameResult={setGameResult}
      />
    </>
  );
}

export default Game;
