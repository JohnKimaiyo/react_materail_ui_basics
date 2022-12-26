import React from 'react'

import Autocomplete from "@mui/material/Autocomplete"

const days = ["monday","tuesday","wednesday","thursday","friday"];

export default function Days(){

    return (
        
        <label>
          Value:{" "}
          <Autocomplete
            sx={{
              width: 200,
            }}
            id="custom-input-demo"
            options={days}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input type="text" {...params.inputProps} />
              </div>
            )}
          />
        </label>
      );
    }
    
    