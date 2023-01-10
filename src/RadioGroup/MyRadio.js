import React from "react";

import RadioGroup from "@mui/material/RadioGroup";
import { Radio } from "@mui/material/Radio";
import FormControlLabel from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormControlLabel";

//Props list:
//children: It is used to denote the content of RadioGroup.
//defaultValue: It is used to set a default value of the RadioGroup.
//name: Used to reference the radio button
//value: The value of the selected radio button is shown through this.
//onChange: Callback function to access current event value and perform other actions on user click.

function MyRadio() {
  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ color: "green" }}>Geeks for Geeks </h1>
      <h3>
        <u>React MUI RdioGroup API</u>
      </h3>
      <br />
      <FormControl>
        <FormLabel>Favourite GFG Course</FormLabel>
        <br />
        <RadioGroup row>
          <FormControlLabel
            valeu="DSA Self Paced Course"
            control={<Radio />}
            label="DSA Self Paced Course"
          />
          <FormControlLabel
            value="Amazon SDE Preparation"
            control={<Radio />}
            label="Amazon SDE Preparation"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default MyRadio;
