export const SingleReview = ({ reviews }) => {
  const review = reviews[0];
  return (
    <main>
      <header>
        <h2>{review.title}</h2>
      </header>
      <img src={review.review_img_url} alt={review.title} />
      <p>Designer: {review.designer}</p>
      <p>Category: {review.category}</p>
      <p>Review: {review.review_body}</p>
      <p>{review.votes}</p>
      <p>{review.created_at}</p>
      <p></p>
    </main>
  );
};
