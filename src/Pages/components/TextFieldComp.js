import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

function TextFieldComp() {
  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl fullWidth>
        <TextField
          variant="outlined"
          type="number"
          label="Amount of Questions"
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
}

export default TextFieldComp;
