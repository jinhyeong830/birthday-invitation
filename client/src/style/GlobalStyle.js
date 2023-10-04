import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'UhBeenamsoyoung';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeenamsoyoung.woff') format('woff');
font-weight: normal;
font-style: normal;
}

@font-face {
    font-family: 'KCCChassam';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCChassam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  body {
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a{
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;
export default GlobalStyle;
