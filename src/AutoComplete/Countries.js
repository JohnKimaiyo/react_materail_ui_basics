import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
const countries = ["USA", "GERMANY", "ITALY", "JAPAN", "UK"];

export default function Countries() {
  return (
    <label>
      value:{""}
      <Autocomplete
        sx={{
          width: 200,
        }}
        id="custom-input-demo"
        options={countries}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} />
          </div>
        )}
      />
    </label>
  );
}
