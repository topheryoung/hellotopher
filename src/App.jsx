import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles/theme";

const App = () => {
  const [currentTheme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <GlobalStyles />
      <main>
        Layout stuff
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        >
          Toggle theme
        </button>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Bio</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default App;
