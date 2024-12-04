import { Box } from "@mui/material";
import IntroSection from "./Components/IntroSection";
import RecentSection from "./Components/RecentSection";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <IntroSection />
      <RecentSection />
    </Box>
  );
}
