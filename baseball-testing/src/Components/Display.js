import React from "react";

const Display = ({ strikeCount, ballCount }) => {
  return (
    <div>
      <div className="strikes">
        <h2>Strikes</h2>
        <p>{strikeCount}</p>
      </div>
      <div className="balls">
        <h2>Balls</h2>
        <p>{ballCount}</p>
      </div>
    </div>
  );
};

export default Display;
