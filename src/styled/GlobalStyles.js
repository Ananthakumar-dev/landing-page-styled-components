import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     html {
          font-size: 62.5%;
     }

     body {
          font-size: 1.6rem;
          font-weight: 400;
          font-family: Inter sans-serif;
          background-color: ${({ theme }) => theme.colors.body};
     }

     p {
          line-height: 1.5;
     }

     img {
          max-width: 100%;
     }

     input, button, select {
          font: inherit;
     } 
`;

export default GlobalStyles;
