import { Box, Typography } from "@mui/material";

export default function IntroSection() {
  return (
    <>
      <Box bgcolor="primary.main" minHeight="100vh" p="2rem">
        <Box display="flex" justifyContent="center">
          <Box
            minHeight="60vh"
            p="3rem"
            display="flex"
            flexDirection="column"
            maxWidth="55%"
            sx={{ cursor: "pointer" }}
          >
            <Box
              minHeight="45vh"
              borderRadius="10px"
              sx={{
                backgroundImage: `url('https://images.unsplash.com/photo-1733246849141-50776096f51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')`, // Specify image size for Unsplash
                backgroundSize: "cover", // Ensure the image covers the box
                backgroundPosition: "center", // Centers the image in the box
                backgroundRepeat: "no-repeat", // Prevents repeating
              }}
            ></Box>
            <Box
              color="primary.text"
              display="flex"
              flexDirection="column"
              gap="0.5rem"
              mt="1rem"
            >
              <Typography variant="caption" color="primary.light">
                Jul 17, 2024
              </Typography>
              <Typography variant="h5">This is the Heading</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                corporis repudiandae enim eius quibusdam quisquam provident
                illo, sed voluptates labore aut est cum quis totam. Corrupti
                quaerat vel ad doloribus?
              </Typography>
            </Box>
          </Box>
          <Box
            py="3rem"
            display="flex"
            flexDirection="column"
            maxWidth="55%"
            gap="2rem"
          >
            <Box display="flex" gap="1rem" sx={{ cursor: "pointer" }}>
              <Box
                bgcolor="green"
                minHeight="20vh"
                minWidth="40%"
                borderRadius="10px"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1733246849141-50776096f51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8')`, // Specify image size for Unsplash
                  backgroundSize: "cover", // Ensure the image covers the box
                  backgroundPosition: "center", // Centers the image in the box
                  backgroundRepeat: "no-repeat", // Prevents repeating
                }}
              ></Box>
              <Box>
                <Typography variant="caption" color="primary.light">
                  Jul 17, 2024
                </Typography>
                <Typography variant="body1" color="primary.text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis ipsam, in praesentium
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
