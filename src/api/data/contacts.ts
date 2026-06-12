import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Contact {
  name: string;
  link: string;
  extraText: string;
  icon: IconType;
  showInNavbar: boolean,
}

export const contacts: Contact[] = [
  {
    name: "Email",
    link: "mailto:your@email.com",
    extraText: "Send me a message",
    icon: FaEnvelope,
    showInNavbar: false,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/decomacie",
    extraText: "Connect professionally",
    icon: FaLinkedin,
    showInNavbar: true,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/devmacie?igsh=MXRkcTNqZnhpOW50Yg%3D%3D&utm_source=qr",
    extraText: "Follow my journey",
    icon: FaInstagram,
    showInNavbar: true,
  },
  {
    name: "GitHub",
    link: "https://github.com/DecoMacie",
    extraText: "Browse my projects",
    icon: FaGithub,
    showInNavbar: true,
  },
];
