import * as React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ menuItems, bgColor, activeId, setActiveId }) => {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activeMenu", activeId);
  }, [activeId]);

  const handleExpand = (item) => {
    setExpanded((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            transition: "width 0.3s",
            overflowX: "hidden",
            backgroundColor: bgColor || "white",
            position: "absolute",
            top: "10vh", // Starts below the navbar
            height: "calc(100vh - 10vh)", // Adjust height to fit below navbar
          },
        }}
      >
        <List>
          {menuItems.map(({ id, text, icon, path, subItems }) => (
            <React.Fragment key={id}>
              <ListItem disablePadding sx={{ mt: "1rem" }}>
                <ListItemButton
                  onClick={() => {
                    if (subItems) {
                      handleExpand(id);
                    } else {
                      setActiveId(id);
                      navigate(path);
                    }
                  }}
                  sx={{
                    justifyContent: "initial",
                    px: 2.5,
                    bgcolor: activeId === id ? "primary.light" : "inherit", // Highlight active menu
                    color: activeId === id ? "white" : "black",
                    "&:hover": { bgcolor: "primary.main", color: "white" },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: activeId === id ? "white" : "inherit" }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {subItems &&
                    (expanded[id] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
                </ListItemButton>
              </ListItem>

              {subItems && (
                <Collapse in={expanded[id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subItems.map(
                      ({
                        id: subId,
                        text: subText,
                        icon: subIcon,
                        path: subPath,
                      }) => (
                        <ListItemButton
                          key={subId}
                          sx={{
                            pl: 4,
                            bgcolor:
                              activeId === subId ? "primary.light" : "inherit",
                            color: activeId === subId ? "white" : "black",
                            "&:hover": {
                              bgcolor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={() => {
                            setActiveId(subId);
                            navigate(subPath);
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              color: activeId === subId ? "white" : "inherit",
                            }}
                          >
                            {subIcon}
                          </ListItemIcon>
                          <ListItemText primary={subText} />
                        </ListItemButton>
                      )
                    )}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      path: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          icon: PropTypes.element.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  bgColor: PropTypes.string,
  activeId: PropTypes.string.isRequired,
  setActiveId: PropTypes.func.isRequired,
};

export default Sidebar;
