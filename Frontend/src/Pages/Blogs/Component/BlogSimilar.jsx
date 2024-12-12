import { Box, Button, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function BlogSimilar() {
  return (
    <>
      <Box minHeight="80vh" bgcolor="#F9C0AB" p="2rem">
        <Box px="3rem" mb="1rem">
          <Typography variant="body" color="primary.light">
            You might like
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
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
            }}
          >
            {[...Array(3)].map((_, index) => (
              <Box
                key={index}
                minHeight="20vh"
                display="flex"
                flexDirection="column"
                bgcolor="#F4E0AF"
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                borderRadius="10px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    border: "1px solid black",
                    borderBottom: "5px solid black",
                    transform: "translateY(-7px)",
                    textDecoration: "underline",
                    transition: "0.5s",
                  },
                }}
              >
                <Box
                  minHeight="40vh"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                  sx={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1733860474140-1734a8361e82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                <Box p="1rem">
                  <Typography variant="caption" color="primary.light">
                    Jul 17, 2024
                  </Typography>
                  <Typography variant="body1">
                    Design Instagram Stories untuk iklan cuci gudang akhir tahun
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end" // Push the button to the right
            mt="1rem"
          >
            <Button
              variant="outlined"
              endIcon={<EastIcon />}
              sx={{
                border: "1px solid black",
                maxWidth: "15rem",
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "primary.text",
                  transition: "0.8s",
                },
              }}
            >
              Explore More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
