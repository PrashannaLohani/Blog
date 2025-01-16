import { Box } from "@mui/material";
import BlogHeading from "./Sections/BlogHeading";
import BlogMain from "./Sections/BlogMain";
import BlogShare from "./Sections/BlogShare";
import BlogSimilar from "./Sections/BlogSimilar";
import BlogReview from "./Sections/BlogReview";

export default function Blogs() {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
  return (
    <>
      <Box minHeight="100vh">
        <BlogHeading />
        <BlogMain />
        <BlogShare />
        <BlogSimilar truncateText={truncateText} />
        <BlogReview />
      </Box>
    </>
  );
}
