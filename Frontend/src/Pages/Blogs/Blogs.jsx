import { Box } from "@mui/material";
import BlogHeading from "./Component/BlogHeading";
import BlogMain from "./Component/BlogMain";
import BlogSimilar from "./Component/BlogSimilar";
import BlogShare from "./Component/BlogShare";

export default function Blogs() {
  return (
    <>
      <Box minHeight="100vh">
        <BlogHeading />
        <BlogMain />
        <BlogShare />
        <BlogSimilar />
      </Box>
    </>
  );
}
