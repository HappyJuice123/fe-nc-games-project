import { ReviewCard } from "./ReviewCard";

export const Reviews = ({ reviews, isLoading }) => {
  return (
    <main>
      <header>
        <h2>Reviews</h2>
      </header>
      <section>
        <ReviewCard reviews={reviews} isLoading={isLoading} />
      </section>
    </main>
  );
};
