import React, { useState } from "react";
import Display from "./Display";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: gray;
  height: 400px;
  width: 800px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;

  .btn {
    height: 45px;
    width: 85px;
    margin: 0 30px;
    font-size: 1.1rem;
    border-radius: 10px;
  }
`;

// Updater functions
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
    <DashboardContainer>
      <Display strikeCount={strikeCount} ballCount={ballCount} />
      <ButtonContainer>
        <button
          className="btn btn-strike"
          onClick={() => setStrikeCount(addCount(strikeCount))}
        >
          Strike
        </button>
        <button
          className="btn btn-ball"
          onClick={() => setBallCount(addCount(ballCount))}
        >
          Ball
        </button>
        <button
          className="btn btn-foul"
          onClick={() => setStrikeCount(foulCount(strikeCount))}
        >
          Foul!
        </button>
        <button className="btn btn-hit" onClick={() => clearCount()}>
          Hit!
        </button>
      </ButtonContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
