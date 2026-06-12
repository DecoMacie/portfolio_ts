import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { JSX, useState } from "react";

interface NavBarItems {
  internalLink: string[];
  externalLink: {
    link: string;
    icon: JSX.Element;
  }[];
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems: NavBarItems = {
    internalLink: [
      "Home",
      "Portfolio",
      "Services",
      "Education",
      "Media",
      "Contacts",
    ],
    externalLink: [
      {
        link: "https://www.linkedin.com/in/decomacie",
        icon: <FaLinkedin />,
      },
      {
        link: "https://www.instagram.com/devmacie?igsh=MXRkcTNqZnhpOW50Yg%3D%3D&utm_source=qr",
        icon: <FaInstagram />,
      },
      {
        link: "https://github.com/DecoMacie",
        icon: <FaGithub />,
      },
    ],
  };

  return (
    <nav className="mt-0.5 bg-[#D9A400] text-white space-mono-bold">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Desktop internal links */}
        <ul className="hidden md:flex gap-6">
          {navbarItems.internalLink.map((item) => (
            <li key={item}>
              <Link
                className="hover:text-[#14B8A6] transition-colors"
                to={!item || item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* External links */}
        <div className="flex items-center gap-4 text-lg md:text-base">
          {navbarItems.externalLink.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#14B8A6] transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white my-1 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#D9A400] border-t border-[#E7E5E0]/30 px-4 pb-4 space-y-4">
          {/* Internal links */}
          <ul className="flex flex-col gap-3">
            {navbarItems.internalLink.map((item) => (
              <li key={item}>
                <Link
                  to={!item || item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-[#14B8A6] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* External links */}
          <div className="flex gap-4 text-lg">
            {navbarItems.externalLink.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#14B8A6] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
