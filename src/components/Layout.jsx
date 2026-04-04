import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "../App.css";

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
