import React from "react";
import Dashboard from "./Components/Dashboard";
import "./App.css";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6b0f1a;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer className="App">
      <Dashboard />
    </AppContainer>
  );
}

export default App;
