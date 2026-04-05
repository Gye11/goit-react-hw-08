import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Layout() {
  return (
    <div className="container">
      <Navigation />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}
