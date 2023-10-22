import React from "react";

const KEY_ARRAY = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getLetterStatus = (validatedGuesses) => {
  const letterStatus = {};
  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      letterStatus[letter] = status;
    });
  });

  return letterStatus;
};

const Keyboard = ({ validatedGuesses }) => {
  const letterStatus = getLetterStatus(validatedGuesses);

  return (
    <div className="keyboard">
      {KEY_ARRAY.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${letterStatus[letter] ?? ""}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
