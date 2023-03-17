import { ReviewCards } from "./ReviewCards";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { useSearchParams } from "react-router-dom";

export const Reviews = ({
  reviews,
  isReviewsLoading,
  categories,
  setReviews,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [err, setErr] = useState(null);

  const filterByCategory = searchParams.get("category");
  const sortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order_by");

  useEffect(() => {
    setErr(null);
    getReviews(filterByCategory, sortBy, orderBy)
      .then((data) => {
        const reviewsData = data.reviews;
        setReviews(reviewsData);
      })
      .catch((err) => {
        console.log(err);
        setErr(`${err.response.data.msg} - Go Back.`);
      });
  }, [filterByCategory, setReviews, sortBy, orderBy]);

  return err ? (
    <p>{err}</p>
  ) : (
    <main>
      <header>
        <h2>Reviews</h2>
      </header>
      <section>
        <div className="dropdown">
          <label htmlFor="category-dropdown">Category </label>

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
        <div className="dropdown">
          <label htmlFor="sort-by">Sort By</label>
          <select
            id="sort-by"
            value={sortBy || "default"}
            onChange={(event) => {
              const newSortParams = new URLSearchParams(searchParams);

              if (event.target.value === "default") {
                newSortParams.delete("sort_by");
              } else {
                newSortParams.set("sort_by", event.target.value);
              }

              setSearchParams(newSortParams);
            }}
          >
            <option value="default">Default</option>
            <option value="title" key="title">
              Title
            </option>
            <option value="created_at" key="time">
              Time
            </option>
            <option value="votes" key="votes">
              Votes
            </option>
            <option value="comment_count" key="comments">
              Comments
            </option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="order-by">Order By</label>
          <select
            id="order-by"
            value={orderBy || "DESC"}
            onChange={(event) => {
              const newOrderParams = new URLSearchParams(searchParams);
              newOrderParams.set("order_by", event.target.value);
              setSearchParams(newOrderParams);
            }}
          >
            <option value="DESC" key="desc">
              Desc
            </option>
            <option value="ASC" key="asc">
              Asc
            </option>
          </select>
        </div>

        <ReviewCards reviews={reviews} isReviewsLoading={isReviewsLoading} />
      </section>
    </main>
  );
};
