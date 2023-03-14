import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById, patchReview } from "../api";
import { Comments } from "./Comments";

export const SingleReview = () => {
  const { review_id } = useParams();

  const [singleReview, setSingleReview] = useState({});
  const [reviewExists, setReviewExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

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

  const upVote = () => {
    setErr(null);
    const voteUpdate = { inc_votes: 1 };
    setSingleReview((currentSingleReview) => {
      return {
        ...currentSingleReview,
        votes: currentSingleReview.votes + 1,
      };
    });
    patchReview(review_id, voteUpdate).catch(() => {
      setErr("Something went wrong, please try again.");
      setSingleReview((currentSingleReview) => {
        return {
          ...currentSingleReview,
          votes: currentSingleReview.votes - 1,
        };
      });
    });
  };

  const downVote = () => {
    setErr(null);
    if (singleReview.votes > 0) {
      const voteUpdate = { inc_votes: -1 };
      setSingleReview((currentSingleReview) => {
        return {
          ...currentSingleReview,
          votes: currentSingleReview.votes - 1,
        };
      });

      patchReview(review_id, voteUpdate).catch((err) => {
        setErr("Something went wrong, please try again.");
        setSingleReview((currentSingleReview) => {
          return {
            ...currentSingleReview,
            votes: currentSingleReview.votes + 1,
          };
        });
      });
    }
  };

  return !isLoading ? (
    reviewExists ? (
      <main className="single-review">
        <section className="link-to-reviews">
          <Link to="/reviews" className="single-review-to-reviews">
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

          <p id="single-review__votes">
            <button type="button" onClick={upVote}>
              Up
            </button>
            <button type="button" onClick={downVote}>
              Down
            </button>
            Votes: {singleReview.votes}
          </p>
          <p>{err ? <p>{err} </p> : null}</p>
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

        <section className="comments">
          {singleReview.comment_count === 0 ? (
            <p>No Comments</p>
          ) : (
            <Comments review_id={review_id} singleReview={singleReview} />
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
