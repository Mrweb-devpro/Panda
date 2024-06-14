import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --bg-color:#F3F8F3;
    --brand-color: #229618;
    --brd: 0.6rem;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
    font-family: "laila";

}

html {
  /* font-size: 10px; */

  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  background-color: var(--bg-color);
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  font-family: "Rubik", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #222;

  /* Only works if there is nothing absolutely positioned in relation to body */
  overflow-x: hidden;
}


button{
    border: 1px solid transparent;
    
    &:hover {
        background-color: transparent;
        border: 1px solid var(--brand-color);
    color: var(--brand-color);
    cursor: pointer;
}
}
textarea{
    outline-color: #229618;
}

`;
export default GlobalStyles;
