"use client";

import GlobalStyle from "@/styles/global-styles";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>{children}</>
    </ThemeProvider>
  );
};
export default NextThemeProvider;