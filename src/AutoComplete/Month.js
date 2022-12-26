import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
const month = ["janauary", "febraury", "march", "april", "may", "june"];
export default function Month() {
  return (
    <label>
    Value:{" "}
    <Autocomplete
      sx={{
        width: 200,
      }}
      id="custom-input-demo"
      options={month}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input type="text" {...params.inputProps} />
        </div>
      )}
    />
  </label>
);
}