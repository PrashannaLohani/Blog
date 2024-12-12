import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function CustomSection2() {
  return (
    <>
      <Box bgcolor="#FFD335" minHeight="60vh" p="2rem">
        <Box display="flex" flexWrap="wrap" p="2rem">
          <Box
            minHeight="50vh"
            display="flex"
            bgcolor="red"
            flexGrow="1"
            borderRadius="10px"
            sx={{
              backgroundImage: `url('https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="1rem"
            p="2rem"
            maxWidth="50%"
            flexWrap="wrap"
          >
            <Typography
              variant="h2"
              fontWeight="700"
              fontFamily="Poppins, sans-serif"
            >
              Top 10 Colleges in Nepal in terms of eductation.
            </Typography>
            <Typography
              variant="body"
              fontWeight="400"
              fontFamily="Poppins, sans-serif"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, expedita? Quis est, voluptate reprehenderit veniam
              doloremque aut debitis reiciendis, harum mollitia maxime eaque.
              Laudantium excepturi nihil quisquam beatae perferendis nulla!
            </Typography>
            <Button
              variant="outlined"
              endIcon={<EastIcon />}
              sx={{
                color: "primary.text",
                bgcolor: "primary.main",
                p: "1rem",
                maxWidth: "20rem",
                "&:hover": {
                  color: "primary.main", // Change border color on hover
                  backgroundColor: "primary.text",
                  transition: "0.8s",
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
