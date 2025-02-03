import { Box, Typography } from "@mui/material";
import Input from "../../../Components/Inputs/input";
import CustomButton from "../../../Components/Basic-Components/Button";
import { useState } from "react";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // to handle error messages

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/; // Regex for validation

    // Check if new password has more than 6 characters and meets all conditions
    if (newPassword.length <= 5) {
      setError("Password must be more than 6 characters.");
    }
    // Check if password meets regex conditions (lowercase, uppercase, special char)
    else if (!passwordRegex.test(newPassword)) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, and one special character."
      );
    }
    // Check if passwords match
    else if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setNewPassword("");
      setConfirmPassword("");
      // Handle password reset logic (e.g., make API call)
      console.log(newPassword);
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
          gap="1rem"
        >
          <Typography variant="h4" align="center">
            Reset Password
          </Typography>
          <Typography variant="body" maxWidth="25rem">
            Please enter your new password.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Input
                name="new-password"
                label="New Password"
                type="password"
                width="25rem"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                name="confirm-password"
                label="Confirm Password"
                type="password"
                width="25rem"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && (
                <Typography color="error" width="25rem" variant="body2">
                  {error}
                </Typography>
              )}
              <CustomButton variant="contained" endIcon="" type="submit">
                Reset
              </CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
