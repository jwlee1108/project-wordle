import React from "react";

function Banner({ gameResult, guessCount, answer }) {
  let isWin = gameResult === "win";

  return (
    <div className={`${isWin ? "happy" : "sad"} banner`}>
      {isWin ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessCount} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
