import { ReviewCards } from "./ReviewCards";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { useSearchParams, Link } from "react-router-dom";

export const Reviews = ({
  reviews,
  isReviewsLoading,
  categories,
  setReviews,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [err, setErr] = useState(null);

  const filterByCategory = searchParams.get("category");

  useEffect(() => {
    setErr(null);
    getReviews(filterByCategory)
      .then((data) => {
        const reviewsData = data.reviews;
        setReviews(reviewsData);
      })
      .catch((err) => {
        console.log(err);
        setErr(`${err.response.data.msg} - This category does not exist.`);
      });
  }, [filterByCategory, setReviews]);

  return err ? (
    <p>{err}</p>
  ) : (
    <main>
      <header>
        <h2>Reviews</h2>
      </header>
      <section>
        <Link to="/categories" className="link-to-page">
          See All Categories
        </Link>
      </section>
      <br></br>
      <section>
        <label htmlFor="category-dropdown">Category </label>

        <div>
          <select
            id="category-dropdown"
            value={!filterByCategory ? "All" : filterByCategory}
            onChange={(event) => {
              const newSearchParams = new URLSearchParams(searchParams);
              if (event.target.value !== "All") {
                newSearchParams.set("category", event.target.value);
              } else {
                newSearchParams.delete("category");
              }
              setSearchParams(newSearchParams);
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

        <ReviewCards reviews={reviews} isReviewsLoading={isReviewsLoading} />
      </section>
    </main>
  );
};
