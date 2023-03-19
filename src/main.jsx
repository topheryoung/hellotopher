import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Intro from "./pages/Intro";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import FourOhFour from "./pages/404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Intro />} />
          <Route path="/about" element={<Bio />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
