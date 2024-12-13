import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function BlogShare() {
  const social = [
    {
      id: 1,
      icon: <InstagramIcon sx={{ height: "30px", width: "30px" }} />,
      path: "#",
    },
    {
      id: 2,
      icon: <XIcon sx={{ height: "30px", width: "30px" }} />,
      path: "#",
    },
    {
      id: 3,
      icon: <FacebookIcon sx={{ height: "30px", width: "30px" }} />,
      path: "#",
    },
    {
      id: 4,
      icon: <LinkedInIcon sx={{ height: "30px", width: "30px" }} />,
      path: "#",
    },
  ];
  return (
    <>
      <Box
        bgcolor="primary.main"
        minHeight="40vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="2rem"
      >
        <Typography variant="h6" fontWeight="600" color="primary.text">
          Share This Article
        </Typography>
        <Box display="flex" gap="4rem">
          {social.map((socialItem) => (
            <IconButton
              key={socialItem.id}
              component="a"
              href={socialItem.path}
              sx={{
                color: "primary.text",
                "&:hover": {
                  color: "primary.light",
                  bgcolor: "primary.text",
                  transition: "0.3s",
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
