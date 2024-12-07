import { Box, Typography } from "@mui/material";

export default function RecentSection() {
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
            Recent Blogs
          </Typography>
        </Box>
        <Box
          minHeight="70vh"
          display="grid"
          gap="1rem"
          px="3rem"
          sx={{
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: "1rem",
            px: "3rem",
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
                  transform: "translateY(-7px)",
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
                  backgroundImage: `url('https://source.unsplash.com/random/400x300?sig=${index}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Optional Text Overlay */}
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    p: "0.5rem",
                    borderRadius: "4px",
                  }}
                >
                  Blog {index + 1}
                </Typography>
              </Box>
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
      </Box>
    </>
  );
}
