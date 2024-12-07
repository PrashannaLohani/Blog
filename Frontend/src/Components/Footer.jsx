import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <>
      <Box
        minHeight="50vh"
        p="3rem"
        display="flex"
        justifyContent="space-around"
        mt="5rem"
        gap="8rem"
        bgcolor="primary.main"
      >
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box>
            <Typography
              variant="h3"
              fontFamily="typography"
              color="primary.text"
            >
              Let's get Connected
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary.text">
              Contact Information
            </Typography>
            <Box display="flex" alignItems="center" mt="0.5rem" gap="1rem">
              <PhoneInTalkIcon sx={{ color: "primary.text", height: "20px" }} />
              <Typography variant="body2" color="primary.text">
                +977 9800000002
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt="0.5rem" gap="1rem">
              <EmailIcon sx={{ color: "primary.text", height: "20px" }} />
              <Typography variant="body2" color="primary.text">
                youremailid.com
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="1rem" mt="5rem">
          <Typography variant="h6" color="primary.text" fontWeight="500">
            Stay Connected{" "}
          </Typography>
          <FormControl sx={{ gap: "1rem" }}>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
              placeholder=" Enter your email"
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
              }}
            >
              Subscribe
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "primary.main" }} />
      <Box
        padding="2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        gap="20rem"
        bgcolor="primary.main"
      >
        <Box>
          <Typography variant="caption" color="primary.text">
            2022&#169; company.Ltd. All Right reserved
          </Typography>
        </Box>
      </Box>
    </>
  );
}
