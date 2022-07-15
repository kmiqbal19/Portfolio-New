import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    font-size: 62.5%;
    background-color:black ;
}
body{
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: #f7f8fb;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

`;
export default GlobalStyles;
