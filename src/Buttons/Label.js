import React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

export default function Label() {
  return (
    <Stack direct="row" spacing={2}>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />}>
        Remove
      </Button>
    </Stack>
  );
}
