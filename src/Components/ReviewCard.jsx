import { Link } from "react-router-dom";
export const ReviewCard = ({ reviews, isLoading }) => {
  return !isLoading ? (
    <section>
      <ul className="reviews">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="review-card">
              <section>
                <Link
                  to={`/reviews/${review.review_id}`}
                  id="review-card__link"
                >
                  <h3 className="review-title">{review.title}</h3>
                  <img
                    src={review.review_img_url}
                    alt={review.title}
                    className="review-img"
                  />
                </Link>{" "}
              </section>
              <p className="review-body">{review.review_body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <p>Loading...</p>
  );
};
