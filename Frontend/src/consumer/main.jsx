import { StrictMode, Suspense } from "react";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#121212",
      text: "#FFFFFF",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Suspense>
  </StrictMode>
);
