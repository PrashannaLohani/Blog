import { Box } from "@mui/material";
import BlogHeading from "./Component/BlogHeading";
import BlogMain from "./Component/BlogMain";

export default function Blogs() {
  return (
    <>
      <Box minHeight="100vh">
        <BlogHeading />
        <BlogMain />
      </Box>
    </>
  );
}
