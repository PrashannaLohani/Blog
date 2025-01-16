import React from "react";
import { Box } from "@mui/material";

// Lazy load components (you can still use them if necessary)
const IntroSection = React.lazy(() => import("./Sections/IntroSection"));
const RecentSection = React.lazy(() => import("./Sections/RecentSection"));
const CustomSection1 = React.lazy(() => import("./Sections/CustomSection1"));
const BlogGrid = React.lazy(() => import("./Sections/BlogGrid"));
const CustomSection2 = React.lazy(() => import("./Sections/CustomSection2"));
const BlogGrid2 = React.lazy(() => import("./Sections/BlogGrid2"));

export default function Home() {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <Box minHeight="100vh">
      <IntroSection truncateText={truncateText} />
      <RecentSection />
      <CustomSection1 truncateText={truncateText} />
      <BlogGrid />
      <CustomSection2 truncateText={truncateText} />
      <BlogGrid2 />
    </Box>
  );
}
