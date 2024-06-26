import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DarkModeContext from "./DarkModeContext";
import { useState } from "react";
import { useEffect } from "react";
// PAGES
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import WorkPage from "./pages/WorkPage";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("isDarkMode")));
  const [theme, setTheme] = useState(isDarkMode ? "dark" : "light");
  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return (
    <BrowserRouter basename='/my-portfolio'>
      <DarkModeContext.Provider
        value={{
          isDarkMode,
          toggle: () => {
            localStorage["isDarkMode"] = !isDarkMode;
            setIsDarkMode((isDarkMode) => !isDarkMode);
            
          },
        }}
      >
        <Header theme={theme} />

        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/#top" />
          <Route path="/#works" />
          <Route path="/#contact" />
          <Route
            path="/curriculum"
            element={<Curriculum theme={theme} />}
          />

          <Route
            path="/project/:workSlug"
            element={<WorkPage theme={theme} />}
          />
        </Routes>
        <Footer theme={theme} />
      </DarkModeContext.Provider>
    </BrowserRouter>
  );
}
