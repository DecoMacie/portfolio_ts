import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";

export default function Root() {
  return (
    <div className="container mx-auto px-10">
      <NavBar />
      <Outlet />
    </div>
  );
}
