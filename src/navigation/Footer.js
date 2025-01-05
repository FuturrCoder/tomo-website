import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-48 px-8 py-5 border-t-2 border-t-gray-200 w-full flex flex-wrap gap-8">
      <span className="text-neutral-gray text-sm">© 2024 Tomo</span>
      <Link to="/about" className="text-neutral-gray text-sm underline underline-offset-2">About</Link>
    </div>
  );
}

export default Footer;