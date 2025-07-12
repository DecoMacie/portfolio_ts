import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { JSX } from "react";

interface NavBarItems {
  internalLink: string[];
  externalLink: {
    link: string;
    icon: JSX.Element;
  }[];
}

export default function NavBar() {
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
        link: "https://www.instagram.com/your-profile",
        icon: <FaInstagram />,
      },
      {
        link: "https://github.com/DecoMacie",
        icon: <FaGithub />,
      },
    ],
  };

  const renderedInternalNavbarItems = navbarItems.internalLink.map((item) => {
    console.log(item.toLowerCase);
    return (
      <li key={item}>
        <Link
          className="hover:text-[#228B22]"
          to={!item || item === "Home" ? "/" : `/${item.toLowerCase()}`}
        >
          {item}
        </Link>
      </li>
    );
  });

  const renderedExternalNavbarItems = navbarItems.externalLink.map((item) => {
    return (
      <a
        key={item.link}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#228B22]"
      >
        {item.icon}
      </a>
    );
  });

  return (
    <nav className="bg-[#E1AD01] text-white space-mono-bold">
      <div className="container mx-auto flex items-center justify-between p-4">
        <ul className="hidden md:flex space-x-6">
          {renderedInternalNavbarItems}
        </ul>
        <div className="flex space-x-4">{renderedExternalNavbarItems}</div>
      </div>
    </nav>
  );
}
