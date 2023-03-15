import { useState } from "react";
import { patchReview } from "../api";

export const Voting = ({ setSingleReview, review_id, singleReview }) => {
  const [err, setErr] = useState(null);

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
    } else {
      setErr("Negative votes are not allowed");
    }
  };

  return (
    <section>
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
    </section>
  );
};
