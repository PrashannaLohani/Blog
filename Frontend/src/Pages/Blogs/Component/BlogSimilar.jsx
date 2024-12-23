import { Box, Typography } from "@mui/material";
import CustomButton from "../../../Components/Basic-Components/Button";
import CustomCard from "../../../Components/Basic-Components/CustomCard";

export default function BlogSimilar() {
  const cards = [
    {
      title: "Breaking Barriers with Quantum Computing",
      date: "Mar 15, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1721332149112-c54e68990d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Innovative Startups to Watch in 2025",
      date: "Apr 5, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "Virtual Reality in Education",
      date: "Apr 20, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
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
            <CustomButton>Explore More</CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
