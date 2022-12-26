import React from "react"
import Button from "@mui/material/Button";
// or


export default function Basic() {
  return (
    <buttonGroup
      variant="contained"
      arial-label="outlined primary button group"
    >
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </buttonGroup>
  );
}
