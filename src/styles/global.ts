import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        text-decoration: none;
    }
    body{
        background-color: #1e192c;
        color:#fff;
        overflow: hidden;
    }
`;
