import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
