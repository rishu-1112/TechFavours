import { Link } from "react-router-dom";

export default function Breadcrumbs({ title }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-6">
      <ol className="flex gap-2">
        <li>
          <Link to="/" className="hover:text-white">
            Home
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
        </li>
        <li>/</li>
        <li className="text-white">{title}</li>
      </ol>
    </nav>
  );
}
