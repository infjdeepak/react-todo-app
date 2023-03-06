import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
html{
    font-size: 62.5%;

}
body{
    background: #f3ece2;
    color: rgb(56,56,56);
}
h1{
    font-size: 3rem;
}
h2{
    font-size: 3.5rem;
}
h3{
    font-size: 3rem;
}
h4,h5{
    font-size: 2.8rem;
}
p,button,a,input,select{
    font-size: 2.5rem;
}
button,select{
    cursor: pointer;
}
`;
// background: #c473a1;
export default GlobalStyles;
