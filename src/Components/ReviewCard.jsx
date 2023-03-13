export const ReviewCard = ({ reviews }) => {
  console.log(reviews);
  return (
    <section>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.title}</h3>
              <img src={review.review_img_url} alt={review.title} />
              <p>{review.review_body}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
