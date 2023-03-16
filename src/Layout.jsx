import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../styles/theme";
import Nav from "./components/Nav/Nav";

const Layout = () => {
  const [currentTheme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <GlobalStyles />
      <main>
        <Nav />
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
          Toggle theme
        </button>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
