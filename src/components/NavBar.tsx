import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link className="hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/education">
              Education
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/media">
              Media
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/contacts">
              Connect
            </Link>
          </li>
        </ul>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Instagram
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
