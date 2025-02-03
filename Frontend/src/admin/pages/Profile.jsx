import { Avatar, Box, Typography } from "@mui/material";
import CustomButton from "../../Components/Basic-Components/Button";

export default function Profile() {
  return (
    <>
      <Box>
        <Box
          minHeight="40vh"
          display="flex"
          justifyContent="space-between"
          p="1rem"
        >
          <Box display="flex" bgcolor="yellow" p="2rem">
            <Box display="flex" gap="3rem">
              <Avatar
                alt="profile photo"
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                sx={{
                  width: 150,
                  height: 150,
                }}
              />
              <Box display="flex" gap="1rem" flexDirection="column" mt="1rem">
                <Typography variant="h5">ID: 123456789</Typography>
                <Typography variant="h6">Name: 123456789</Typography>
              </Box>
            </Box>
            <Box></Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="1rem"
            alignItems="flex-start"
          >
            <CustomButton variant="outlined" sx={{ width: "15rem" }}>
              Change Password
            </CustomButton>
            <CustomButton
              variant="contained"
              color="error"
              sx={{ width: "15rem" }}
            >
              Logout
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
