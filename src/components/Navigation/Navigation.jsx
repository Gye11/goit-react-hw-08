import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}

      {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
      {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
    </nav>
  );
}
