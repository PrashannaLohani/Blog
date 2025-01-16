import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function CustomButton({
  children,
  onClick,
  variant = "outlined",
  endIcon = <ArrowForwardIcon />,
  sx = {},
  ...rest
}) {
  return (
    <MuiButton
      variant={variant}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        border: "1px solid black",
        maxWidth: "15rem",
        p: "0.6rem",
        "&:hover": {
          color: "primary.text",
          backgroundColor: "primary.main",
          transition: "0.5s",
        },
        ...sx, // Allow overriding or extending styles via the `sx` prop
      }}
      {...rest} // Spread other props like `disabled`, `startIcon`, etc.
    >
      {children}
    </MuiButton>
  );
}

// Prop type validation for better maintainability
CustomButton.propTypes = {
  children: PropTypes.node.isRequired, // The button label or content
  onClick: PropTypes.func, // The click handler function
  variant: PropTypes.oneOf(["text", "outlined", "contained"]), // Material-UI button variants
  endIcon: PropTypes.node, // The icon to display at the end of the button
  sx: PropTypes.object, // Custom styles
};

CustomButton.defaultProps = {
  onClick: () => {},
  variant: "outlined",
  endIcon: <ArrowForwardIcon />,
  sx: {},
};
