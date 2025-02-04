import {
  Box,
  Button,
  CircularProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import Input from "../../../Components/Inputs/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSnackbar } from "../../../Components/Basic-Components/snackbar/snackbar";
import useApi from "../../../Hook/useApi";
import { setCookie } from "../../../Utils/cookie";

export default function Login() {
  const { showSnackbar } = useAppSnackbar();
  const { request, loading } = useApi();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await request("POST", "/account/login/", { data: payload });
      setCookie("token", res.access_token);
      showSnackbar("Login successful!", "success");
      navigate("/dashboard");
    } catch (error) {
      showSnackbar(`Error: ${error}`, "error");
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
          <Typography variant="h4" fontWeight="700">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Input
                name="email"
                label="Email"
                width="25rem"
                required
                value={payload.email}
                onChange={handleChange}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                width="25rem"
                required
                value={payload.password}
                onChange={handleChange}
              />
              <Box display="flex" justifyContent="flex-end">
                <Typography
                  as="a"
                  variant="subtitle2"
                  onClick={() => navigate("/email-verification")} // Use onClick properly with the navigate function
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  Forget Password?
                </Typography>
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? <CircularProgress /> : "Login"}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
