import { Box, Typography } from "@mui/material";
import CustomButton from "../../../Components/Basic-Components/Button";
import CustomCard from "../../../Components/Basic-Components/CustomCard";

export default function BlogGrid2() {
  const cards = [
    {
      title: "Mastering UI/UX Design Principles",
      date: "Nov 1, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "AI-Powered Tools for Creatives",
      date: "Nov 15, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1719937050445-098888c0625e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "How Blockchain is Transforming Businesses",
      date: "Dec 3, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "The Rise of Remote Work Opportunities",
      date: "Dec 20, 2024",
      backgroundImage:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
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
            Keep Up with
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
            {cards.map((card, index) => (
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
