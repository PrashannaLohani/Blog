import { Box } from "@mui/material";
import IntroSection from "./Components/IntroSection";
import RecentSection from "./Components/RecentSection";
import CustomSection1 from "./Components/CustomSection1";
import BlogGrid from "./Components/BlogGrid";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <IntroSection />
      <RecentSection />
      <CustomSection1 />
      <BlogGrid />
    </Box>
  );
}
