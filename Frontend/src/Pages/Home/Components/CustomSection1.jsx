import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function CustomSection1() {
  return (
    <>
      <Box bgcolor="primary.main" minHeight="80vh" p="2rem">
        <Box display="flex" flexWrap="wrap" p="2rem">
          <Box
            display="flex"
            flexDirection="column"
            gap="2rem"
            p="2rem"
            maxWidth="50%"
            flexWrap="wrap"
          >
            <Typography
              variant="h2"
              color="primary.text"
              fontWeight="700"
              fontFamily="Poppins, sans-serif"
            >
              Top 10 Colleges in Nepal in terms of eductation.
            </Typography>
            <Typography
              variant="body"
              color="primary.text"
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
                border: "1px solid white",
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
          <Box
            minHeight="70vh"
            display="flex"
            bgcolor="red"
            flexGrow="1"
            borderRadius="10px"
            sx={{
              backgroundImage: `url('https://images.unsplash.com/photo-1733393735327-eb1a9d357af4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
