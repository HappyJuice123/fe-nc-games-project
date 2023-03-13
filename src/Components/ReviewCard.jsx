export const ReviewCard = ({ reviews }) => {
  return (
    <section>
      <ul className="reviews">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="review-card">
              <h3>{review.title}</h3>
              <img
                src={review.review_img_url}
                alt={review.title}
                className="review-img"
              />
              <p className="review-body">{review.review_body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
