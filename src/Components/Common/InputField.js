import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = ({ type, id, label, name, onChange }) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type={type}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      autoFocus
    />
  );
};

export default InputField;
