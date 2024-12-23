import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function CustomCard({
  title,
  date,
  backgroundImage,
  onClick,
  truncateText,
}) {
  return (
    <Box
      minHeight="50vh"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      borderRadius="10px"
      onClick={onClick}
      sx={{
        cursor: "pointer",
        "&:hover": {
          border: "1px solid black",
          borderBottom: "5px solid black",
          transform: "translateY(-7px)",
          transition: "0.5s",
        },
        "&:hover .hoverEffect": {
          transform: "translateY(-5px)",
          textDecoration: "underline solid black",
          transition: "0.3s",
        },
      }}
    >
      <Box
        minHeight="50vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box p="1rem">
        <Typography variant="caption" color="primary.light">
          {date}
        </Typography>
        <Typography variant="h6" fontWeight="600" lineHeight="1.2">
          {truncateText ? truncateText(title, 4) : title}
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-end"
          mt="1rem"
          className="hoverEffect"
        >
          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              display: "flex",
              gap: "0.3rem",
            }}
          >
            Read more
          </Typography>
          <ArrowForwardIcon
            sx={{
              color: "primary.main", // Default color
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
CustomCard.propTypes = {
  title: PropTypes.string.isRequired, // Title of the card
  date: PropTypes.string.isRequired, // Date to display
  description: PropTypes.string, // Description for future use (optional)
  backgroundImage: PropTypes.string.isRequired, // Background image URL
  onClick: PropTypes.func, // Callback for card click
  truncateText: PropTypes.func, // Function to truncate text
};

CustomCard.defaultProps = {
  description: "",
  onClick: () => {},
  truncateText: (text = "", wordLimit) =>
    text.split(" ").length > wordLimit
      ? text.split(" ").slice(0, wordLimit).join(" ") + "..."
      : text,
};
