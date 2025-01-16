import {
  Avatar,
  Box,
  Button,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import CustomButton from "../../../../Components/Basic-Components/Button";

export default function BlogReview() {
  // Initial review data
  const review = [
    {
      id: "1",
      name: "Ram Bhattarai",
      date: "December 12, 2024",
      rating: 4.5,
      likes: 36,
      content:
        "Great experience! The service was fast and efficient. Everything was handled professionally, and I didn't have to worry about any delays. The staff seemed highly skilled and well-organized, making the entire process seamless. Highly recommend to anyone looking for reliable service!",
    },
    {
      id: "2",
      name: "Sita Sharma",
      date: "November 25, 2024",
      rating: 4.8,
      likes: 28,
      content:
        "I am so impressed with the quality of work and the professionalism of the team. From start to finish, the process was well-structured, and their attention to detail was remarkable. The staff was friendly and attentive, ensuring that all my concerns were addressed. I’ll definitely come back again for future needs!",
    },
    {
      id: "3",
      name: "Hari Gautam",
      date: "December 10, 2024",
      rating: 4.2,
      likes: 3,
      content:
        "The overall experience was good, but there were a few minor delays in service. Despite that, the quality of the work was commendable, and the team did their best to make up for the time lost. I appreciate their effort and would still recommend their service with slight reservations about time management.",
    },
    {
      id: "4",
      name: "Kusal Gautam",
      date: "December 20, 2024",
      rating: 2,
      likes: 39,
      content:
        "The overall experience was good, but there were a few minor delays in service. Despite that, the quality of the work was commendable, and the team did their best to make up for the time lost. I appreciate their effort and would still recommend their service with slight reservations about time management.",
    },
  ];

  // State to track the number of reviews to display
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);

  // Handle Load More button click
  const loadMoreReviews = () => {
    setVisibleReviewsCount((prevCount) => prevCount + 3); // Load 3 more reviews
  };

  const [likesState, setLikesState] = useState(
    review.map((rev) => ({
      id: rev.id,
      liked: false,
      likeCount: rev.likes,
    }))
  );

  // Handle like/unlike action for a specific review
  const onLikeClick = (id) => {
    setLikesState((prevState) =>
      prevState.map((rev) =>
        rev.id === id
          ? {
              ...rev,
              liked: !rev.liked,
              likeCount: rev.liked ? rev.likeCount - 1 : rev.likeCount + 1,
            }
          : rev
      )
    );
  };

  return (
    <Box
      minHeight="80vh"
      bgcolor="beige"
      display="flex"
      justifyContent="center"
      flexDirection="column"
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
            <TextField
              label="Message"
              variant="outlined"
              multiline
              minRows={3}
            />
            <CustomButton
              endIcon=""
              sx={{
                bgcolor: "primary.main",
                color: "primary.text",
                "&:hover": {
                  bgcolor: "primary.text",
                  color: "primary.main",
                  transition: "0.5s",
                },
              }}
            >
              Submit Review
            </CustomButton>
          </Box>
        </Box>
      </Box>

      <Box
        minHeight="40vh"
        p="1rem"
        display="flex"
        flexDirection="column"
        justifyItems="center"
        alignItems="center"
      >
        <Box>
          <Typography variant="h4" fontWeight={600}>
            Comments
          </Typography>
          {review.slice(0, visibleReviewsCount).map((rev) => {
            const likeState = likesState.find((state) => state.id === rev.id);
            return (
              <Box
                p="1rem"
                border="1px solid grey"
                borderRadius="10px"
                mt="1rem"
                key={rev.id}
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
                <Box display="flex" alignItems="center" gap="1rem">
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => onLikeClick(rev.id)}>
                      {likeState.liked ? (
                        <FavoriteIcon sx={{ color: "#AF1740" }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>

                    <Typography
                      component="a"
                      variant="body2"
                      sx={{ color: "primary.light", cursor: "pointer" }}
                    >
                      {likeState.likeCount}
                    </Typography>
                  </Box>

                  <Typography
                    component="a"
                    variant="caption"
                    sx={{
                      color: "primary.light",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Reply
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {visibleReviewsCount < review.length && (
          <CustomButton
            onClick={loadMoreReviews}
            endIcon=""
            sx={{ mt: "2rem", p: "0.5rem 1rem" }}
          >
            Load More
          </CustomButton>
        )}
      </Box>
    </Box>
  );
}
