"use client";

import GlobalStyle from "./global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
export default NextThemeProvider;
