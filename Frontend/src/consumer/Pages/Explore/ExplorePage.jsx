import { Box, Typography } from "@mui/material";
import CustomCard from "../../../Components/Basic-Components/CustomCard";

export default function ExplorePage() {
  const card = [
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
      <Box minHeight="100vh" bgcolor="beige">
        <Box p="1rem" display="flex" justifyContent="center">
          <Typography variant="h3" fontWeight="600">
            Explore Blogs
          </Typography>
          {/* Here will be searchable */}
        </Box>
        <Box
          minHeight="90vh"
          p="5rem"
          display="grid"
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
          {card.map((cards, index) => (
            <CustomCard
              key={index}
              title={cards.title}
              date={cards.date}
              backgroundImage={cards.backgroundImage}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
