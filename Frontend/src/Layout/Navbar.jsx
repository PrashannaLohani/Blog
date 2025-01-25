import React, { useState, useRef, useEffect } from "react";
import {
  Autocomplete,
  Box,
  IconButton,
  InputBase,
  Typography,
  Collapse,
  keyframes,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Select from "../Components/Inputs/Select";

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(245, 245, 220, 0.6);
  }
  70% {
    box-shadow: 0 0 10px 10px rgba(0, 123, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
`;

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null); // Ref to track the search area

  const navEle = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Blogs", path: "/Blogs" },
    { id: 3, label: "About", path: "/Explore" },
    { id: 4, label: "FAQ", path: "#" },
  ];

  // Detect clicks outside of the search area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false); // Collapse the search bar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box
        bgcolor="primary.main"
        p="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          margin: "0 auto",
          borderBottom: "1px solid white",
          borderWidth: "90%",
        }}
      >
        <Box p="1rem" display="flex" alignItems="center" gap="1rem">
          <img
            src=" \Logo-blackBG.svg"
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
          <Box display="flex" gap="2rem">
            {navEle.map((navItem) => (
              <Typography
                key={navItem.id}
                variant="body1"
                component="a"
                href={navItem.path}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  textDecoration: "none",
                  color: "primary.text",
                  "&:hover": {
                    color: "primary.light",
                    cursor: "pointer",
                  },
                  transition: "transform 0.3s",
                }}
              >
                {navItem.label}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box
          color="primary.light"
          minHeight="2rem"
          p="1rem"
          display="flex"
          alignItems="center"
          gap="1rem"
        >
          {/* Search Icon Button */}
          <Box ref={searchRef} display="flex" alignItems="center" gap="0.5rem">
            <IconButton
              onClick={() => setShowSearch((prev) => !prev)}
              sx={{
                backgroundColor: showSearch ? "primary.light" : "transparent",
                transition: "background-color 0.3s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "50%",

                  animation: `${pulseAnimation} 2s infinite`,
                },
              }}
            >
              <SearchIcon sx={{ color: "primary.text" }} />
            </IconButton>

            {/* Animated Search Input */}
            <Collapse in={showSearch} orientation="horizontal">
              <Box>
                <Select />
              </Box>
            </Collapse>
          </Box>

          {/* Other Buttons */}
          <IconButton
            onClick={() => setShowSearch(false)} // Collapse search when clicked
          >
            <NotificationsIcon
              sx={{
                color: "primary.text",
              }}
            />
          </IconButton>

          <IconButton
            onClick={() => setShowSearch(false)} // Collapse search when clicked
          >
            <MenuIcon sx={{ color: "primary.text" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
