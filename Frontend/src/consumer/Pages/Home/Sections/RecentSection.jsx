import { Box, Typography } from "@mui/material";
import CustomCard from "../../../../Components/Basic-Components/CustomCard";
export default function RecentSection() {
  const cards = [
    {
      title: "Exploring the World of 3D Design",
      date: "Jan 10, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "Top 10 Trends in Digital Marketing",
      date: "Feb 5, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1730829807443-c314c7bd4495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      title: "Sustainability in Modern Architecture",
      date: "Feb 20, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx8fGVufDB8fHx8",
    },
    {
      title: "Advancing AI in Healthcare",
      date: "Mar 1, 2025",
      backgroundImage:
        "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
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
          {cards.map((card, index) => {
            return (
              <CustomCard
                key={index}
                title={card.title}
                date={card.date}
                backgroundImage={card.backgroundImage}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
