import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: DPDorkDiary;
    src: url('fonts/DPDorkDiary.woff2') format('woff2'),
        url('fonts/DPDorkDiary.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    }
    @font-face {
    font-family: Rosario;
    src: url('fonts/Rosario-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    }
    @font-face {
    font-family: Rosario;
    src: url('fonts/Rosario-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    }
    html,
    body {
    background-color:#FBF8F1;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 
    }
    

    a {
    color: inherit;
    text-decoration: none;
    font-family: "Skranji";

    }

    * {
    box-sizing: border-box;
    }
    
`;

export default GlobalStyle;
