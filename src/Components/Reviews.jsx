import { ReviewCard } from "./ReviewCard";

export const Reviews = ({ reviews }) => {
  return (
    <main>
      <header>
        <h2>Reviews</h2>
      </header>
      <ReviewCard reviews={reviews} />
    </main>
  );
};
