import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";

export default function DarkModeButton() {
  const mode = useContext(DarkModeContext);
  return (
    <button className="DarkModeButton" onClick={mode.toggle}>
      {mode.isDarkMode ? "Light" : "Dark"}
    </button>
  );
}
