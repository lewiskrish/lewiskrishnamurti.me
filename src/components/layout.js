import * as React from "react"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, 
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: black;
  }
`;

const Layout = ({ children }) => {

  return (
    <>
      {children}
    </>
  )
};

export default Layout;