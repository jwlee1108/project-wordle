import React from "react";

function GuessResult({ guessResult }) {
  return (
    <div className="guess-results">
      {guessResult.map((guess) => (
        <p className="guess" key={guess.id}>
          {guess.value.split("").map((char, index) => (
            <span className="cell" key={index}>
              {char}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
