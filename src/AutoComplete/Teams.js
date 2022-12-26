import React from "react";
import Autocomplete from "@mui/material/Autocomplete";

const teams = ["manchester", "liverpoool", "everton", "chelsea", "totenhum"];
export default function Teams() {

  return (
    <label>
      value:{""}
      <Autocomplete
        sx={{
          width: 200,
        }}
        id="custom-input-demo"
        options={teams}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} />
          </div>
        )}
      />
    </label>
  );
}
