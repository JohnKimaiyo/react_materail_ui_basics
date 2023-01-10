import React from "react";
import { Typography } from "@mui/material";
export default function Typo() {
  return (
    <div className="App">
      {/* setting the text styling to h1*/}
      <Typography variant="h1">H1.Heading</Typography>
      {/*settinf the text to center with align prop*/}
      <Typography align="center" variant="h2">
        H2.Heading
      </Typography>
      {/*setting the text color to primary*/}
      <Typography color="primary" variant="h3">
        H3.Heading
      </Typography>
      {/*setting the etxt type styling to benlike a button*/}
      <Typography variant="button">Button</Typography>
    </div>
  );
}
