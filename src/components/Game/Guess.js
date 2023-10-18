import React from "react";
import { range } from "../../utils";

function Guess({ letters }) {
  return (
    <>
      {range(0, 5).map((index) => (
        <span className="cell" key={index}>
          {letters[index] ?? ""}
        </span>
      ))}
    </>
  );
}

export default Guess;
