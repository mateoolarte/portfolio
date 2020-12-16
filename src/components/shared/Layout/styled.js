import { createGlobalStyle } from "styled-components";

import { FONTS, COLORS } from "../../../constants";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${COLORS.white};
    font-family: sans-serif;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: ${COLORS.black};
    font-family: ${FONTS.main};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.43px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
  }

  picture {
    display: block;
  }
`;

export { GlobalStyle };
