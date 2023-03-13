import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="header">Games Review</h1>
      </Link>
    </header>
  );
};
