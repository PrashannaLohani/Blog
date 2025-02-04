import React, { createContext, useContext } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

const SnackbarContext = createContext(null);

export const useAppSnackbar = () => {
  return useContext(SnackbarContext);
};

const SnackbarProviderWrapper = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (message, variant = "default") => {
    enqueueSnackbar(message, { variant });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export default function AppSnackbarProvider({ children }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionProps={{ direction: "left" }}
    >
      <SnackbarProviderWrapper>{children}</SnackbarProviderWrapper>
    </SnackbarProvider>
  );
}
