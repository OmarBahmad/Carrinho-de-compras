import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
