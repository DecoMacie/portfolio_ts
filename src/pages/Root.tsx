import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";

export default function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
