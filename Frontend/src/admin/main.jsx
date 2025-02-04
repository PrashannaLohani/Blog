import { StrictMode, Suspense } from "react";

import ReactDOM from "react-dom/client";
import "./main.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Loader from "../Components/loader/Loader.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminApp from "./app.jsx";
import AppSnackbarProvider from "../Components/Basic-Components/snackbar/snackbar.jsx";
import ProtectedRoute from "./Layout/ProtectedLayout.jsx";

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
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppSnackbarProvider>
        <Suspense fallback={<Loader />}>
          <AdminApp />
        </Suspense>
      </AppSnackbarProvider>
    </BrowserRouter>
  </ThemeProvider>
  /* </StrictMode> */
);
