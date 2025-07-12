import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-[#E1AD01] text-white space-mono-bold">
      <div className="container mx-auto flex items-center justify-between p-4">
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link className="hover:text-[#228B22]" to="/">
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
            className="hover:text-[#228B22]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#228B22]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#228B22]"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}
