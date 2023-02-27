import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    font-family: "pauza", "Open Sans", sans-serif;
  }
  body {
    background-color: #f5f5f5;
    padding: 0;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
