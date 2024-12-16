import {
  Avatar,
  Box,
  Button,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

export default function BlogReview() {
  //Dummy data...
  const review = [
    {
      name: "Ram Bhattrai",
      date: "December 12, 2024",
      rating: 4.5,
      content:
        "Great experience! The service was fast and efficient. Everything was handled professionally, and I didn't have to worry about any delays. The staff seemed highly skilled and well-organized, making the entire process seamless. Highly recommend to anyone looking for reliable service!",
    },
    {
      name: "Sita Sharma",
      date: "November 25, 2024",
      rating: 4.8,
      content:
        "I am so impressed with the quality of work and the professionalism of the team. From start to finish, the process was well-structured, and their attention to detail was remarkable. The staff was friendly and attentive, ensuring that all my concerns were addressed. I’ll definitely come back again for future needs!",
    },
    {
      name: "Hari Gautam",
      date: "December 10, 2024",
      rating: 4.2,
      content:
        "The overall experience was good, but there were a few minor delays in service. Despite that, the quality of the work was commendable, and the team did their best to make up for the time lost. I appreciate their effort and would still recommend their service with slight reservations about time management.",
    },
  ];
  return (
    <>
      <Box
        minHeight="80vh"
        bgcolor="beige"
        display="flex"
        justifyContent="center"
        p="5rem"
      >
        <Box minHeight="40vh" flexGrow="1" p="1rem">
          <Typography variant="h4" fontWeight={600}>
            Submit Your Review
          </Typography>
          <Box display="flex" flexDirection="column" gap="1rem">
            <Box display="flex" flexDirection="column">
              <Typography variant="body">Add Your Rating</Typography>
              <Rating value={null} precision={0.5} />
            </Box>
            <Box display="flex" flexDirection="column" gap="1rem">
              <TextField label="Name" variant="outlined" />
              <TextField label="Email" variant="outlined" />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                minRows={5}
              />
              <Button
                variant="outlined"
                sx={{
                  maxWidth: "12rem",
                  bgcolor: "primary.main",
                  color: "primary.text",
                  "&:hover": {
                    bgcolor: "primary.text",
                    color: "primary.main",
                    transition: "0.3s",
                  },
                }}
              >
                Submit Review
              </Button>
            </Box>
          </Box>
        </Box>
        <Box minHeight="40vh" maxWidth="50%" p="1rem">
          <Typography variant="h4" fontWeight={600}>
            Customer Feedback
          </Typography>
          {review.map((rev) => {
            return (
              <Box
                p="1rem"
                border="1px solid grey"
                borderRadius="10px"
                mt="1rem"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  gap="1rem"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center" gap="1rem">
                    <Avatar />
                    <Box display="flex" flexDirection="column">
                      <Typography variant="body">{rev.name}</Typography>
                      <Typography variant="caption" color="primary.light">
                        {rev.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Rating
                      value={rev.rating}
                      size="small"
                      readOnly
                      precision={0.2}
                    />
                  </Box>
                </Box>
                <Box mt="1rem">
                  <Typography variant="body2">{rev.content}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
