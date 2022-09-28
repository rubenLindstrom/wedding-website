import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
    background-color:#FBF8F1;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    @font-face {
    font-family: 'DPDorkDiary';
    src: url('DPDorkDiary.woff2') format('woff2'),
        url('DPDorkDiary.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    }
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
