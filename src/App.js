
import React from "react";
import "./App.css";
import Basic from "./Buttons/Basic";
import Icon from"./Buttons/Icon";
import Loading from "./Buttons/Loading";
import Label from "./Buttons/Label";
function App() {
  return (
    <div className="App">
      <Basic/>
      <Icon/>
      <Loading/>
      <Label/>
    </div>
  );
}

export default App;
