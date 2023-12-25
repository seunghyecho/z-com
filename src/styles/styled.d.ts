"use client";

import { DefaultTheme } from "styled-components";
import { ColorsTypes } from "./theme";

/**
 * 사용할 style type 지정
 */
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
  }
}
