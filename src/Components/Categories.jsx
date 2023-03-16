import { Link } from "react-router-dom";

export const Categories = ({ categories }) => {
  return (
    <section>
      <header>
        <h2>Categories</h2>
      </header>
      <Link to="/reviews" className="link-to-page">
        See All Reviews
      </Link>
      <main>
        <ul className="category-list">
          {categories.map((category) => {
            return (
              <li key={category.slug} className="review-card">
                <h3>
                  <Link
                    to={`/reviews?category=${category.slug}`}
                    className="link-to-page"
                  >
                    {category.slug[0].toUpperCase() + category.slug.slice(1)}
                  </Link>
                </h3>
                <p>Description: {category.description}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
