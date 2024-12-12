import { Box, Typography } from "@mui/material";

export default function BlogHeading() {
  return (
    <>
      <Box
        minHeight="100vh"
        bgcolor="primary.main"
        p="5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="3rem"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap="1rem"
        >
          <Typography
            variant="h3"
            fontFamily="Poppins, sans-serif"
            color="primary.text"
            fontWeight="600"
            maxWidth="40rem"
          >
            Top 10 Colleges in Nepal in terms of eductation
          </Typography>
          <Typography
            variant="h6"
            fontFamily="Poppins, sans-serif"
            color="primary.text"
            fontWeight="600"
            maxWidth="40rem"
          >
            Top 10 Colleges in Nepal in terms of eductation
          </Typography>
        </Box>
        <Box
          minHeight="50vh"
          minWidth="40rem"
          sx={{
            backgroundImage: `url('https://images.unsplash.com/photo-1719937050814-72892488f741?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D')`, // Specify image size for Unsplash
            backgroundSize: "cover", // Ensure the image covers the box
            backgroundPosition: "center", // Centers the image in the box
            backgroundRepeat: "no-repeat", // Prevents repeating
          }}
        ></Box>
      </Box>
    </>
  );
}
