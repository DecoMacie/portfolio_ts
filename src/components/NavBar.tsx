import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/services">Services</Link>
      <Link to="/education">Education</Link>
      <Link to="/media">Media</Link>
      <Link to="/contacts">Connect</Link>
      <a href="https://www.example.com">LinkdIn</a>
      <a href="https://www.example.com">Instagram</a>
      <a href="https://www.example.com">Github</a>
    </div>
  );
}
