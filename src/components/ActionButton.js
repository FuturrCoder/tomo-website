import { Link } from "react-router-dom";

function ActionButton({ to, text, className }) {
  return (
    <Link to={to}
          className={`px-6 py-2.5 border-2 border-primary rounded-3xl font-semibold font-display text-lg transition hover:-translate-y-1 hover:shadow-lg ${className}`}>
      {text}
    </Link>
  );
}

export default ActionButton;