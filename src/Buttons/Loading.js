import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outline">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading.." variant="outline">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        Save
      </LoadingButton>
    </Stack>
  );
}
