import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme";
import Nav from "./components/Nav/Nav";

const Layout = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <main>
        <Nav />
        <button onClick={() => setTheme(isDarkTheme ? "light" : "dark")}>
          Toggle theme
        </button>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
