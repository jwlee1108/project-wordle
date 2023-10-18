import React from "react";
import { range } from "../../utils";

function Guess({ guessValue }) {
  return (
    <>
      {range(0, 5).map((index) => {
        return (
          <span
            className={`cell ${guessValue ? guessValue[index].status : ""}`}
            key={index}
          >
            {guessValue ? guessValue[index].letter : ""}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
