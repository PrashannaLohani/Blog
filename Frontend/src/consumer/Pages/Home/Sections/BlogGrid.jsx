import { Box, Typography } from "@mui/material";
import CustomButton from "../../../../Components/Basic-Components/Button";
import CustomCard from "../../../../Components/Basic-Components/CustomCard";

export default function BlogGrid() {
  const cards = [
    {
      title: "Design Instagram Stories untuk iklan",
      date: "Jul 17, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1733325155289-1d5dc3c9e4a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creative Designs for Marketing",
      date: "Aug 12, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "Innovative Web Development Trends",
      date: "Sep 25, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "The Future of Mobile Applications",
      date: "Oct 8, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
  ];
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
            minHeight="70vh"
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
            {cards?.map((card, index) => (
              <CustomCard
                key={index}
                title={card.title}
                date={card.date}
                backgroundImage={card.backgroundImage}
              />
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
