import React from "react";
import styled from "styled-components";

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountDisplay = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  background: #000;
  color: #fff;
  width: 150px;
  margin: 20px;

  h2 {
    padding: 0 5px;
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
  }
`;

const Display = ({ strikeCount, ballCount }) => {
  return (
    <CountContainer>
      <CountDisplay className="strikes">
        <h2>Strikes</h2>
        <p>{strikeCount}</p>
      </CountDisplay>
      <CountDisplay className="balls">
        <h2>Balls</h2>
        <p>{ballCount}</p>
      </CountDisplay>
    </CountContainer>
  );
};

export default Display;
