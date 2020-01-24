import React, { useState } from "react";
import Display from "./Display";

export const addCount = currentCount => {
  return currentCount + 1;
};

export const foulCount = currentCount => {
  return currentCount === 2 ? currentCount : currentCount + 1;
};

const Dashboard = () => {
  const [strikeCount, setStrikeCount] = useState(0);
  const [ballCount, setBallCount] = useState(0);

  if (strikeCount > 2 || ballCount > 3) {
    setStrikeCount(0);
    setBallCount(0);
  }

  const clearCount = currentCount => {
    const clearedCount = (currentCount = 0);
    setStrikeCount(clearedCount);
    setBallCount(clearedCount);
  };

  return (
    <div>
      <Display strikeCount={strikeCount} ballCount={ballCount} />
      <div className="btn-container">
        <div className="strike-btn">
          <button onClick={() => setStrikeCount(addCount(strikeCount))}>
            Strike
          </button>
        </div>
        <div className="ball-btn">
          <button onClick={() => setBallCount(addCount(ballCount))}>
            Ball
          </button>
        </div>
        <div className="foul-btn">
          <button onClick={() => setStrikeCount(foulCount(strikeCount))}>
            Foul Ball
          </button>
        </div>
        <div className="hit-btn">
          <button onClick={() => clearCount()}>Hit!</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
