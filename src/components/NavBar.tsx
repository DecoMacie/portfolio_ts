import { Link } from "react-router-dom";
import { contacts } from "../api/data/contacts";
import { useState } from "react";

interface NavBarItems {
  internalLink: string[];
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
  };

  const socialContacts = contacts.filter((contact) => contact.showInNavbar);

  const formatPath = (item: string) =>
    item === "Home" ? "/" : `/${item.toLowerCase()}`;

  return (
    <nav className="mt-0.5 bg-[#D9A400] text-white space-mono-bold">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Desktop internal links */}
        <ul className="hidden md:flex gap-6">
          {navbarItems.internalLink.map((item) => (
            <li key={item}>
              <Link
                className="hover:text-[#14B8A6] transition-colors"
                to={formatPath(item)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop social links */}
        <div className="flex items-center gap-4 text-lg md:text-base">
          {socialContacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#14B8A6] transition-colors"
                aria-label={contact.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
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
                  to={formatPath(item)}
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
            {socialContacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#14B8A6] transition-colors"
                  aria-label={contact.name}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
