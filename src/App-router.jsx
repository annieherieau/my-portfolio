import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DarkModeContext from "./DarkModeContext";
import { useState } from "react";
import { useEffect } from "react";
// PAGES
import Profile from "./pages/Profile";
import Curriculum from "./pages/Curriculum";
import Contact from "./pages/Contact";
import Works from "./components/Works";
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

        <main className={theme}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/works" element={<Works />} />
            <Route path="/projects" element={<WorkPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/work/:filter/:workSlug" element={<WorkPage />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </DarkModeContext.Provider>
    </BrowserRouter>
  );
}
