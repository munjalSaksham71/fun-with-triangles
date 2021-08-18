import React, { useState } from "react";

const AreaOfTriangle = () => {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [message, setMessage] = useState("");

  const areaOfTriangle = () => {
    const b = Number(base);
    const h = Number(height);
    const area = b * h * 0.5;

    setMessage(`The Area of a Triangle is ${area}`);
  };

  return (
    <div>
      <h3>
        Give me the value of height and base of a triangle. <br /> We will give
        back area of a traingle
      </h3>
      <div className="input-field">
        <label>Base Of Triangle: </label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
        <label>Height Of Triangle: </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={areaOfTriangle}>Calculate</button>
      <div style={{ fontSize: "xx-larger" }}>{message}</div>
    </div>
  );
};

export default AreaOfTriangle;
