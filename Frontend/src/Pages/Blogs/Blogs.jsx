import { Box } from "@mui/material";
import BlogHeading from "./Component/BlogHeading";
import BlogMain from "./Component/BlogMain";
import BlogSimilar from "./Component/BlogSimilar";
import BlogShare from "./Component/BlogShare";
import BlogReview from "./Component/BlogReview";

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
