import { Box } from "@mui/material";
import IntroSection from "./Components/IntroSection";
import RecentSection from "./Components/RecentSection";
import CustomSection1 from "./Components/CustomSection1";
import BlogGrid from "./Components/BlogGrid";
import CustomSection2 from "./Components/CustomSection2";
import BlogGrid2 from "./Components/BlogGrid2";

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
      <RecentSection truncateText={truncateText} />
      <CustomSection1 truncateText={truncateText} />
      <BlogGrid truncateText={truncateText} />
      <CustomSection2 truncateText={truncateText} />
      <BlogGrid2 truncateText={truncateText} />
    </Box>
  );
}
