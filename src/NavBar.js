import logo from "./logo.svg";

function NavBar(props) {
  return (
    <nav
      className="flex flex-wrap justify-center items-center gap-4 border-b-2 border-b-gray-200 px-7 py-3 font-display">
      <a href="/">
        <img src={logo} width="40" alt="logo"/>
      </a>
      <a className="text-4xl font-extrabold text-primary" href="/">tomo</a>
      <span className="sm:flex-grow"></span>
      <div className="block md:inline">
        {props.links.map((link) => (
          <a className="text-2xl text-neutral-gray font-bold hover:text-primary [&:not(:first-child)]:ml-8"
             href={link.url}>
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;