import { Box, Typography } from "@mui/material";

export default function BlogGrid2() {
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
            Keep Up with
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
                  border: "1px solid black",
                  borderBottom: "5px solid black",
                  transition: "0.5s",
                  textDecoration: "underline",
                },
              }}
            >
              <Box
                minHeight="50vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1733341127451-310048ab18c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D')`,
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
      </Box>
    </>
  );
}
