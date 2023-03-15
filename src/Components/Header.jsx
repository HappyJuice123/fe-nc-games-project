import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" className="header">
          <img src={require("./logo.png")} alt="logo" id="logo" />
        </Link>
      </h1>
    </header>
  );
};
