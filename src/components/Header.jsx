import { NavLink } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

export default function Header(props) {
  const theme = props.theme;
  return (
    <header className={theme}>
      
      <nav>
        <img className="logo" src="src/assets/logo-anniehd-web.png" />
        <NavLink to="/">Annie Hérieau</NavLink>
        <NavLink to="/curriculum">Curriculum</NavLink>
        <NavLink to="/works">Travaux</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <DarkModeButton />
      <div className="hamburger"></div>
    </header>
  );
}
