import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CameraIcon from "@mui/icons-material/Camera";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
export default function Icon() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="camera">
        <CameraIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="Secondary" arial-label="cancel">
        <CancelIcon />
      </IconButton>
      <IconButton color="primary" aria-lable="attach email">
        <AttachEmailIcon />
      </IconButton>
    </Stack>
  );
}
