import { Box } from "@mui/material";

export default function BlogReview() {
  return (
    <>
      <Box
        minHeight="80vh"
        bgcolor="beige"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="5rem"
      >
        <Box bgcolor="red" minHeight="40vh" flexGrow="1">
          This is Box 1
        </Box>
        <Box bgcolor="yellow" minHeight="40vh" flexGrow="1">
          THis is Box 2
        </Box>
      </Box>
    </>
  );
}
