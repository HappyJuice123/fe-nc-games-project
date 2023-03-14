import { ReviewCards } from "./ReviewCards";

export const Reviews = ({ reviews, isReviewsLoading }) => {
  return (
    <main>
      <header>
        <h2>Reviews</h2>
      </header>
      <section>
        <ReviewCards reviews={reviews} isReviewsLoading={isReviewsLoading} />
      </section>
    </main>
  );
};
