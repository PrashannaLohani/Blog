import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  const navEle = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Blogs", path: "#" },
    { id: 3, label: "About", path: "#" },
    { id: 4, label: "FAQ", path: "#" },
  ];
  const social = [
    { id: 1, icon: <InstagramIcon />, path: "#" },
    { id: 2, icon: <XIcon />, path: "#" },
    { id: 3, icon: <FacebookIcon />, path: "#" },
    { id: 4, icon: <LinkedInIcon />, path: "#" },
  ];

  return (
    <>
      <Box
        bgcolor="primary.main"
        p="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          margin: "0 auto", // Center the divider
          borderBottom: "1px solid white",
          borderWidth: "90%",
        }}
      >
        <Box p="1rem" display="flex" alignItems="center" gap="3rem">
          <Box>
            <Avatar
              sx={{
                background:
                  "linear-gradient(217deg, rgba(230,63,75,1) 57%, rgba(255,255,255,1) 100%)",
              }}
            >
              M
            </Avatar>
          </Box>
          <Box display="flex" gap="2rem">
            {navEle.map((navItem) => (
              <Typography
                key={navItem.id}
                variant="body1"
                component="a"
                href={navItem.path}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400, // Ensure this matches the weight of 'poppins-extralight'
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
          gap="3px"
        >
          {social.map((socialItem) => (
            <IconButton
              key={socialItem.id}
              component="a"
              href={socialItem.path}
              sx={{
                color: "primary.text",
                "&:hover": {
                  color: "primary.light",
                  cursor: "pointer",
                },
              }}
            >
              {socialItem.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </>
  );
}
