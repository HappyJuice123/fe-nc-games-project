import { ReviewCards } from "./ReviewCards";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Link } from "react-router-dom";

export const Reviews = ({
  reviews,
  isReviewsLoading,
  categories,
  setReviews,
}) => {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getReviews(category)
      .then((data) => {
        const reviewsData = data.reviews;
        setReviews(reviewsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category, setReviews]);

  return (
    <main>
      <header>
        <h2>Reviews</h2>
      </header>
      <section>
        <label htmlFor="category-dropdown">Category </label>

        <Link
          to={category === "All" ? "/reviews" : `/reviews?category=${category}`}
        >
          <div>
            <select
              id="category-dropdown"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <option key="all" value="All">
                All
              </option>
              {categories.map((category) => {
                return (
                  <option key={category.slug} value={category.slug}>
                    {category.slug[0].toUpperCase() + category.slug.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
        </Link>

        <ReviewCards reviews={reviews} isReviewsLoading={isReviewsLoading} />
      </section>
    </main>
  );
};
