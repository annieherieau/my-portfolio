import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import { Button } from "react-bootstrap";

export default function DarkModeButton() {
  const mode = useContext(DarkModeContext);
  return (
    <Button className="DarkModeButton" onClick={mode.toggle}>
      {mode.isDarkMode ? "Light" : "Dark"}
    </Button>
  );
}
