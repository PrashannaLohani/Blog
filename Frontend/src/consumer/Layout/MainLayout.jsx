import { Box } from "@mui/material";
import Navbar from "./Navbar";
import CustomFooter from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Box minHeight="100vh">
        <Navbar />
        {children}
        <CustomFooter />
      </Box>
    </>
  );
}
