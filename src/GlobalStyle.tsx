import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Ramche';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Ramche.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
body {
    font-family: 'Ramche';
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto
}

`;

export default GlobalStyle;
