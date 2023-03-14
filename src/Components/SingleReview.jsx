import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById } from "../utils";

export const SingleReview = () => {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState({});
  const [reviewExists, setReviewExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((data) => {
        setReviewExists(true);
        setSingleReview(data.review);
        setIsLoading(false);
      })
      .catch(() => {
        setReviewExists(false);
      });
  }, [review_id]);

  return !isLoading ? (
    reviewExists ? (
      <main className="single-review">
        <section>
          <Link to="/reviews" id="single-review-to-reviews">
            Go Back to Reviews
          </Link>
        </section>

        <section className="single-review__img-section">
          <img
            src={singleReview.review_img_url}
            alt={singleReview.title}
            id="single-review__img"
          />
        </section>
        <section className="single-review__text-section">
          <header>
            <h2 id="single-review__title">{singleReview.title}</h2>
          </header>
          <p id="single-review__designer">Designer: {singleReview.designer}</p>
          <p id="single-review__category">Category: {singleReview.category}</p>
          <p id="single-review__body">
            Review: <br></br>
            <br></br>
            {singleReview.review_body}
          </p>
          <p id="single-review__votes">Votes: {singleReview.votes}</p>
          <p id="single-review__comment-count">
            {singleReview.comment_count} Comments
          </p>
          {singleReview.created_at ? (
            <p id="single-review__created">
              {singleReview.owner} on {singleReview.created_at.substring(0, 10)}
            </p>
          ) : (
            <p>{""}</p>
          )}
        </section>
      </main>
    ) : (
      <p className="err-msg">There is no review with this review id</p>
    )
  ) : (
    <p>Loading...</p>
  );
};
