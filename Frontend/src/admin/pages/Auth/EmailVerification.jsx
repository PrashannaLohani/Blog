import { Box, Typography } from "@mui/material";
import Input from "../../../Components/Inputs/input";
import CustomButton from "../../../Components/Basic-Components/Button";
import { useState } from "react";

export default function EmailVerify() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    console.log(email);
  };
  return (
    <>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bgcolor="primary.background"
          p="4rem"
          borderRadius="1rem"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
        >
          <Typography variant="h4">Email Verification</Typography>
          <Typography variant="body" maxWidth="25rem">
            Please enter your email for verification. A password reset link will
            be sent to your email address.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Input
                name="email"
                label="Email"
                width="25rem"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomButton variant="contained" endIcon="" type="submit">
                Send
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
