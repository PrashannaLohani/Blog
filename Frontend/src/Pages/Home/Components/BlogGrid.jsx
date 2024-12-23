import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomButton from "../../../Components/Basic-Components/Button";

export default function BlogGrid({ truncateText }) {
  return (
    <>
      <Box
        minHeight="100vh"
        p="2rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Box px="3rem" mb="1rem">
          <Typography
            variant="body"
            color="primary.main"
            sx={{ opacity: "50%" }}
          >
            Sports Blogs
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          px="3rem"
          sx={{
            position: "relative",
          }}
        >
          <Box
            display="grid"
            gap="1rem"
            sx={{
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
            }}
          >
            {[...Array(4)].map((_, index) => (
              <Box
                key={index}
                minHeight="50vh"
                display="flex"
                flexDirection="column"
                overflow="hidden"
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                borderRadius="10px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    border: "1px solid black",
                    borderBottom: "5px solid black",
                    transform: "translateY(-7px)",
                    transition: "0.5s",
                  },
                  "&:hover .hoverEffect": {
                    transform: "translateY(-5px)",
                    textDecoration: "Underline solid black",
                    transition: "0.3s",
                  },
                }}
              >
                <Box
                  bgcolor="red"
                  minHeight="50vh"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1733325155289-1d5dc3c9e4a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                <Box p="1rem">
                  <Typography variant="caption" color="primary.light">
                    Jul 17, 2024
                  </Typography>
                  <Typography variant="h6" fontWeight="600" lineHeight="1.2">
                    {truncateText("Design Instagram Stories untuk iklan", 4)}
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="flex-end" // Push the button to the right
                    mt="1rem"
                    className="hoverEffect"
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: "primary.main",
                        display: "flex",
                        gap: "0.3rem",
                      }}
                    >
                      Read more
                    </Typography>
                    <ArrowForwardIcon
                      sx={{
                        color: "primary.main", // Default color
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end" // Push the button to the right
            mt="1rem"
          >
            <CustomButton>Explore more</CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
