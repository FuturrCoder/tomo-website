import logo from "./logo.svg";
import {Link} from "react-router-dom";

function NavBar(props) {
  return (
    <nav
      className="flex flex-wrap justify-center items-center gap-4 border-b-2 border-b-gray-200 px-7 py-3 font-display">
      <Link to="/">
        <img src={logo} width="40" alt="logo"/>
      </Link>
      <Link className="text-4xl font-extrabold text-primary" to="/">tomo</Link>
      <span className="sm:flex-grow"></span>
      <div className="block md:inline">
        {props.links.map((link, idx) => (
          <Link className="text-2xl text-neutral-gray font-bold hover:text-primary [&:not(:first-child)]:ml-8"
             to={link.url} key={idx}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;