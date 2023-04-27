import CssBaseline from "@mui/material/CssBaseline";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./containers/App.jsx";
import "./style/main.scss";

const rootElement = document.getElementById("root");

/*
  USEFUL: All `Portal`-related components need to have the the main app wrapper element as a containerso that the are in the subtree under the element used in the `important` option of the Tailwind's config.

  USEFUL: Change Default MUI FontFamily(Roboto) to `Slussen-Semibold-TRIAL`
*/
const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
  typography: {
    fontFamily: ["slussen-semibold-trial"].join(","),
  },
});

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* NOTE: CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
