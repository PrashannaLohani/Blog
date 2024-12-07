import { Box } from "@mui/material";
import IntroSection from "./Components/IntroSection";
import RecentSection from "./Components/RecentSection";
import CustomSection1 from "./Components/CustomSection1";
import BlogGrid from "./Components/BlogGrid";
import CustomSection2 from "./Components/CustomSection2";
import BlogGrid2 from "./Components/BlogGrid2";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <IntroSection />
      <RecentSection />
      <CustomSection1 />
      <BlogGrid />
      <CustomSection2 />
      <BlogGrid2 />
    </Box>
  );
}
