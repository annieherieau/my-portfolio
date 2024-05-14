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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(isDarkMode ? "dark" : "light");
  useEffect(() => {
    setTheme(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  return (
    <BrowserRouter>
      <DarkModeContext.Provider
        value={{
          isDarkMode,
          toggle: () => setIsDarkMode((isDarkMode) => !isDarkMode),
        }}
      >
        <Header theme={theme} />

        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/#works" />
          <Route path="/#contact" />
          <Route path="/curriculum" element={<Curriculum />} />

          <Route path="/work/:filter/:workSlug" element={<WorkPage />} />
        </Routes>
        <Footer theme={theme} />
      </DarkModeContext.Provider>
    </BrowserRouter>
  );
}
