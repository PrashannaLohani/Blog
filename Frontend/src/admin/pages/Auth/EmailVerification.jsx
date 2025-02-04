import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import Input from "../../../Components/Inputs/input";
import CustomButton from "../../../Components/Basic-Components/Button";
import { useState } from "react";
import useApi from "../../../Hook/useApi";
import { useAppSnackbar } from "../../../Components/Basic-Components/snackbar/snackbar";

export default function EmailVerify() {
  const [email, setEmail] = useState("");
  const { request, loading } = useApi();
  const { showSnackbar } = useAppSnackbar();
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await request("POST", "account/email-verification/", {
        data: { email }, // Sending email as part of the data payload
      });
      setEmailSent(true);
      // Check if the response contains success message
      if (res.message === "Password reset link sent successfully!") {
        showSnackbar(res.message, "success"); // Show success message
      }
    } catch (error) {
      // Handling error case when email is not registered
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      showSnackbar(errorMessage, "error"); // Show error message
    }
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
          {(emailSent && (
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap="1rem">
                <Input
                  name="email"
                  label="Email"
                  width="25rem"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomButton
                  variant="contained"
                  endIcon=""
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <CircularProgress /> : "Send"}
                </CustomButton>
              </Box>
            </form>
          )) || (
            <Box sx={{ mt: "1rem", width: "100%" }}>
              <Alert severity="info" variant="filled">
                Password Reset Link is sent!!
              </Alert>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
