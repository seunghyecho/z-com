import { DefaultTheme } from "styled-components";

const colors = {
 blue_0: "linear-gradient(114deg, #0038F5 0%, #9F03FF 100%)",
 blue_1: "rgb(29, 155, 240)",
 blue_2: "#0038F5",

 gray_0: "rgb(29, 155, 240, 0.1)",
 gray_1: "rgb(29, 155, 240, 0.01)",

 black_0: "rgba(15,20,25, 0.1)",
 black_1: " rgba(0, 0, 0, 0.4)",
 black_2: "#222",
 black_3: "#555",

 white_0: "#fff",
 white_1: " rgb(239, 243, 244)",

 border: "0.45em solid #0038F5",
 outline: "max(2px, 0.1em) dotted #0038F5",
};

export type ColorsTypes = typeof colors;
export const theme: DefaultTheme = {
 colors,
};
