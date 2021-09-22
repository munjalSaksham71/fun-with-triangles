import React, { useState } from "react";

const Hypotenuse = () => {
  const [base, setBase] = useState();
  const [perp, setPerp] = useState();
  const [hypo, setHypo] = useState("");

  const hypOfTriangle = () => {
    const b = Number(base);
    const p = Number(perp);
    const hypotenuse = Math.sqrt(b*b+p*p);

    setHypo(`The Hypotenuse of a Triangle is ${hypotenuse}`);
  };

  return (
    <div>
      <h3>
        Give me the value of Perpendicular and base of a triangle. <br /> We will give
        back Hypotenuse of a triangle
      </h3>
      <div className="input-field">
        <label>Base Of Triangle: </label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <label>Perpendicular Of Triangle: </label>
        <input
          type="number"
          value={perp}
          onChange={(e) => setPerp(e.target.value)}
        />
      </div>
      <button onClick={hypOfTriangle}>Calculate</button>
      <div>{hypo}</div>
    </div>
  );
};

export default Hypotenuse;
