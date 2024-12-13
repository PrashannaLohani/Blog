import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const social = [
    { id: 1, icon: <InstagramIcon />, path: "#" },
    { id: 2, icon: <XIcon />, path: "#" },
    { id: 3, icon: <FacebookIcon />, path: "#" },
    { id: 4, icon: <LinkedInIcon />, path: "#" },
  ];
  return (
    <>
      <Box
        p="2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        gap="2rem"
        bgcolor="primary.main"
      >
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography
              variant="h3"
              fontFamily="typography"
              color="primary.text"
            >
              Let's get Connected
            </Typography>
          </Box>
          <Box mt="2rem">
            <Typography variant="h6" color="primary.text">
              Contact Information
            </Typography>
            <Box display="flex" alignItems="center" mt="0.5rem" gap="1rem">
              <EmailIcon sx={{ color: "primary.text", height: "20px" }} />
              <Typography variant="body2" color="primary.text">
                youremailid.com
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="1rem">
          <Typography variant="h6" color="primary.text" fontWeight="500">
            Send Feedback
          </Typography>
          <FormControl sx={{ gap: "1rem", minWidth: "20rem" }}>
            <Input
              placeholder="Enter your email"
              type="email"
              disableUnderline="true"
              sx={{
                bgcolor: "white",
                borderRadius: "5px ",
                p: "10px",
                fontFamily: "monospace",
              }}
            />
            <textarea
              placeholder="Message"
              type="text"
              style={{
                bgcolor: "white",
                borderRadius: "5px ",
                padding: "1rem",
                fontFamily: "monospace",
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: "primary.text",
                border: "1px solid white",
                mt: "1rem",
                maxWidth: "10rem",
                "&:hover": {
                  color: "primary.main", // Change border color on hover
                  backgroundColor: "primary.text",
                  transition: "0.8s",
                },
              }}
            >
              Send
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "primary.main" }} />
      <Box
        padding="1rem"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        gap="20rem"
        bgcolor="primary.main"
      >
        <Box
          color="primary.light"
          minHeight="2rem"
          display="flex"
          gap="3px"
          mt="1rem"
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
        <Box minHeight="2rem" mt="1rem" display="flex" alignItems="center">
          <Typography variant="caption" color="primary.text">
            2024&#169; company.Ltd. All Right reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}
