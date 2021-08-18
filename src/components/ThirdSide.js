import React, { useState } from "react";

const ThirdSide = () => {
  const randomFirst = Math.floor(Math.random() * 100);
  const randomSecond = Math.floor(Math.random() * 60);

  const [playing, setPlaying] = useState(false);
  const [firstValue, setFirstValue] = useState(randomFirst);
  const [secondValue, setSecondValue] = useState(randomSecond);
  const [thirdValue, setThirdValue] = useState(
    180 - (randomFirst + randomSecond)
  );
  const [answer, setAnswer] = useState(0);
  const [message, setMessage] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    setPlaying(true);
    if (thirdValue === Number(answer)) {
      setMessage("YAyyy You are right");
    } else {
      setMessage(`OOps You are wrong the correct answer is: ${thirdValue} `);
    }
  };

  const playAgainHandler = () => {
    setFirstValue(randomFirst);
    setSecondValue(randomSecond);
    setThirdValue(180 - (randomFirst + randomSecond));
    setAnswer(0);
    setPlaying(false);
  };

  return (
    <div>
      <h3>Find The Third Side of a Triangle</h3>
      <p>First Side: {firstValue}</p>
      <p>Second Side: {secondValue}</p>
      <label>Third Side : </label>
      <input type="number" onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={clickHandler}> Check</button>
      {playing && <div>{message}</div>}
      <button onClick={playAgainHandler}>Play Again</button>
    </div>
  );
};

export default ThirdSide;
