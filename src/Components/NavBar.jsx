import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <section className="nav-bar">
      <Link to="/reviews" className="link-to-page">
        {" "}
        REVIEWS
      </Link>
      <Link to="/Categories" className="link-to-page">
        CATEGORIES
      </Link>
    </section>
  );
};
