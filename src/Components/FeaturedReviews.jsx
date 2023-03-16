import { Link } from "react-router-dom";
import { featuredReviewsIndex } from "../utils";
export const FeaturedReviews = ({ reviews }) => {
  const indexArr = featuredReviewsIndex(reviews);

  return reviews.length > 0 ? (
    <section>
      <header>
        <h2>Featured Reviews</h2>
      </header>
      <main>
        <section>
          <Link to="/reviews" className="link-to-page">
            See All Reviews
          </Link>
          <Link to="/categories" className="link-to-page">
            See All Categories
          </Link>
        </section>

        <ul className="reviews">
          {indexArr.map((index) => {
            return (
              <li
                key={`featured-${reviews[index].review_id}`}
                className="review-card"
              >
                <section>
                  <Link
                    to={`/reviews/${reviews[index].review_id}`}
                    className="review-title"
                  >
                    <h3>{reviews[index].title}</h3>
                    <img
                      src={reviews[index].review_img_url}
                      alt={reviews[index].title}
                      className="review-img"
                    />
                  </Link>
                </section>
                <p className="review-body">
                  Review: {reviews[index].review_body}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
      <section>
        <Link to="/reviews" className="link-to-page">
          See All Reviews
        </Link>
      </section>
    </section>
  ) : (
    <p></p>
  );
};
