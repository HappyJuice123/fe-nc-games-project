import { Link } from "react-router-dom";
export const ReviewCards = ({ reviews, isReviewsLoading }) => {
  return !isReviewsLoading ? (
    <section>
      <ul className="reviews">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="review-card">
              <section>
                <Link
                  to={`/reviews/${review.review_id}`}
                  className="review-card__link"
                >
                  <h3 className="review-title">{review.title}</h3>
                  <img
                    src={review.review_img_url}
                    alt={review.title}
                    className="review-img"
                  />
                </Link>{" "}
              </section>
              <p className="votes">Votes: {review.votes}</p>
              <p className="review-body">{review.review_body}</p>
              <p className="review-comment-count">
                {review.comment_count} Comments
              </p>
              <p className="review-time">
                {review.owner} on {review.created_at.substring(0, 10)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <p>Loading...</p>
  );
};
