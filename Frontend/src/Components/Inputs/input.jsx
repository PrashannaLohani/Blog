import { TextField, InputAdornment, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Input({
  name,
  label,
  variant = "outlined",
  placeholder,
  required = false,
  type = "text",
  onChange,
  value,
  helperText,
  error,
  width,
  ...rest
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <TextField
      variant={variant}
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      type={type === "password" && showPassword ? "text" : type}
      value={value} // This ensures the component is controlled
      onChange={onChange} // Pass onChange to handle updates
      helperText={helperText}
      error={error}
      sx={{ width }}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  helperText: PropTypes.string,
  error: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
