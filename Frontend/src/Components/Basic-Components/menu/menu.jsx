import PropTypes from "prop-types";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { useState } from "react";

export default function DynamicMenu({ menuItems, icon, sx = {}, ...rest }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{
          "&:hover": {
            bgcolor: "primary.light",
          },
        }}
        {...rest}
      >
        {icon}
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem
            sx={{
              minWidth: "10rem",
            }}
            key={index}
            onClick={() => {
              handleClose();
              item.onClick();
            }}
          >
            {item.icon && <item.icon style={{ marginRight: 8 }} />} {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

DynamicMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.element, // Make it optional
    })
  ).isRequired,
  icon: PropTypes.elementType, // Custom icon component
  sx: PropTypes.object, // Custom styles
};
