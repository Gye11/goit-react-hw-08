import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}
