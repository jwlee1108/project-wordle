import React from "react";

import Banner from "../Banner";

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={handleRestart}>Restart Game</button>
    </Banner>
  );
}

export default LostBanner;
