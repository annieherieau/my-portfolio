import { createContext } from "react";

// const DarkModeContext = createContext(false);
function getDarkMode(isDarkMode) {
  return isDarkMode ? true : false;
}
const DarkModeContext = createContext(false
);

export default DarkModeContext;
