import React from "react";
import "./App.css";
import Landing_Page from "./components/Landing_Page";
import Signup from "./components/SignUp";

function App() {
  return (
    <>
      <div className="page">
        <Landing_Page />
        <Signup />
      </div>
    </>
  );
}

export default App;
