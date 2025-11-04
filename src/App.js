import React from "react";
import TicTacToe from "./TicTacToe";
import UserFetcher from "./UserFetcher";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}></h1>
      <h1 style={{ textAlign: "center" }}>Tic Tac Toe</h1>
      <TicTacToe />
      <hr />
      <h1 style={{ textAlign: "center" }}>User Profile Lookup</h1>
      <UserFetcher />
    </div>
  );
}

export default App;
