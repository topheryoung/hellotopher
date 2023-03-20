import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/theme";

import Nav from "./components/Nav";

const App = () => {
  const [currentTheme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <GlobalStyles />
      <main>
        <Nav
          toggleTheme={() =>
            setTheme(currentTheme === "dark" ? "light" : "dark")
          }
          isDarkMode={currentTheme === "dark"}
        />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default App;
