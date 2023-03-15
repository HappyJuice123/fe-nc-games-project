import { Link } from "react-router-dom";
import { Login } from "./Login";
export const Header = ({ login, setLogin }) => {
  return (
    <header>
      <h1>
        <Link to="/" className="header">
          Games Review
        </Link>
        <Login login={login} setLogin={setLogin} />
      </h1>
    </header>
  );
};
