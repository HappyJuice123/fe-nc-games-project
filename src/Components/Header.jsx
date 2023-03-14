import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" className="header">
          Games Review
        </Link>
      </h1>
    </header>
  );
};
