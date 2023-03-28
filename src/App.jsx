import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/theme";

import Nav from "./components/Nav";

const App = () => {
  const [currentTheme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = (theme) => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <GlobalStyles />
      <main>
        <Nav
          toggleTheme={() => toggleTheme(currentTheme)}
          isDarkMode={currentTheme === "dark"}
        />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default App;
