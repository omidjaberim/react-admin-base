import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ForwardedRef, forwardRef } from "react";

const CustomTextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement> | null) => {
    return <TextField ref={ref} {...props} />;
  }
);

export default CustomTextField;
