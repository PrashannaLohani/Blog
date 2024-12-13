import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function IntroSection({ truncateText }) {
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
            borderRadius="10px"
            sx={{
              cursor: "pointer",
              "&:hover .hoverEffect": {
                transform: "translateY(-5px)",
                textDecoration: "Underline solid  white",
                transition: "0.3s",
              },
            }}
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
              <Typography variant="h4">
                {truncateText("This is the Heading ", 6)}
              </Typography>
              <Typography variant="body1">
                {truncateText(
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit corporis repudiandae enim eius quibusdam quisquam provident illo, sed voluptates labore aut est cum quis totam. Corrupti quaerat vel ad doloribus?",
                  50
                )}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end" // Push the button to the right
              mt="1rem"
              className="hoverEffect"
            >
              <Typography
                variant="body1"
                sx={{
                  color: "primary.text",
                  display: "flex",
                  gap: "0.3rem",
                }}
              >
                Read more
              </Typography>
              <ArrowForwardIcon
                sx={{
                  color: "primary.text", // Default color
                }}
              />
            </Box>
          </Box>
          <Box
            py="3rem"
            display="flex"
            flexDirection="column"
            maxWidth="55%"
            gap="2rem"
          >
            <Box
              display="flex"
              gap="1rem"
              sx={{
                cursor: "pointer",
                "&:hover .hoverEffect": {
                  transform: "translateY(-5px)",
                  textDecoration: "Underline solid white",
                  transition: "0.3s",
                },
              }}
            >
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
                <Box>
                  <Typography variant="caption" color="primary.light">
                    Jul 17, 2024
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary.text"
                    fontWeight="600"
                  >
                    {truncateText(
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                      7
                    )}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end" // Push the content to the right
                  alignItems="center"
                  gap="0.5rem"
                  mt="1rem"
                  className="hoverEffect"
                  sx={{
                    cursor: "pointer", // Add pointer cursor for better UX
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "primary.text",
                      display: "flex",
                      gap: "0.3rem",
                    }}
                  >
                    Read more
                  </Typography>
                  <ArrowForwardIcon
                    sx={{
                      color: "primary.text", // Default color
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
