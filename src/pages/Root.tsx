import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root() {
  return (
    <div className="container mx-auto px-10">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <footer className="mt-16 border-t border-[#E7E5E0] bg-[#F8F7F3] py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dercio Macie
          </p>

          <p className="mt-2 text-sm text-[#14B8A6]">
            React • TypeScript • Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
