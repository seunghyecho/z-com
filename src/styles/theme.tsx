"use client";

import { DefaultTheme } from "styled-components";

const colors = {
  // blue
  blue_0: "rgb(127, 196, 243)",
  blue_1: "rgb(29, 155, 240)",
  // gray
  gray_0: "rgb(29, 155, 240, 0.1)",
  gray_1: "rgb(29, 155, 240, 0.01)",
  // black
  black_0: "rgba(15,20,25, 0.1)",
  black_1: " rgba(0, 0, 0, 0.4)",
  // white
  white_0: "#fff",
};

export type ColorsTypes = typeof colors;
export const theme: DefaultTheme = {
  colors,
};
