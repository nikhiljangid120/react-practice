import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ol>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact
          </NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;

/*  
Link → Used for navigation without refreshing the page (basic routing).
NavLink → Works like Link, but automatically applies an active class when the route is active.
 */
