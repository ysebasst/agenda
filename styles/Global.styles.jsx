import { createGlobalStyle } from "styled-components";

import { colors } from "../config";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    height: 100vh;
    margin: 0;
    overflow-x: hidden;
    font-family: sans-serif;
    color: ${colors.black};
    background-color: ${colors.light};
    > div#__next {
      height: 100%;
    }
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
