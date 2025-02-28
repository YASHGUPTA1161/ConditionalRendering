import React from "react";
import Login from "./Login";

var isIsLoggedIn = false;

function App() {
  return (
    <div className="container">{isIsLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
