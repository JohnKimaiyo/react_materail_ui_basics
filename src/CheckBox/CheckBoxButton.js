import React from "react";
import Checkbox from "@material/react-checkbox";
import '@material/react-checkbox/index.scss';
import "@material/react-checkbox/dist/checkbox.css";
export default function CheckBoxButton() {
  return (
    <div>
      <div
        className="head"
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "green",
          }}
        >
          Geeks for geeks
        </h1>
        <strong>React MUI Checkbox API</strong>
        <br />
        <br />
      </div>
      <div
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <Checkbox defaultChecked />
        <Checkbox />
        <Checkbox disabled />
        <Checkbox disbaled checked />
      </div>
    </div>
  );
}
