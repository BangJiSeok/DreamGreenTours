import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`

    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    .notosanskr * { 
        font-family: 'Noto Sans KR', sans-serif;
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    ${reset}

    *{
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        text-shadow: 0px 0px 0px rgba(0,0,0,0.1);
        text-decoration: none;
        color: #131313;
    }

    button{
        border: none;
    }

`;

export default GlobalStyle;
