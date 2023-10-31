import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Class Counter</h2>
      <ClassCounter />
      <br />
      <hr />
      <h2>Functional Counter</h2>
      <FunctionCounter />
    </div>
  );
}

export default App;
