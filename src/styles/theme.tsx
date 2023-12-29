import { DefaultTheme } from "styled-components";

const colors = {
  blue_0: "linear-gradient(114deg, #0038F5 0%, #9F03FF 100%)",
  blue_1: "rgb(29, 155, 240)",
  gray_0: "rgb(29, 155, 240, 0.1)",
  gray_1: "rgb(29, 155, 240, 0.01)",
  black_0: "rgba(15,20,25, 0.1)",
  black_1: " rgba(0, 0, 0, 0.4)",
  black_2: "#222",
  black_3: "#555",
  white_0: "#fff",
};

export type ColorsTypes = typeof colors;
export const theme: DefaultTheme = {
  colors,
};
