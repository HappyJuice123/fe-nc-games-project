import { useState } from "react";
import { patchReview } from "../api";

export const Voting = ({ setSingleReview, review_id, singleReview }) => {
  const [err, setErr] = useState(null);
  const [userUpVote, setUserUpVote] = useState(0);
  const [userDownVote, setUserDownVote] = useState(0);

  const upVote = () => {
    setErr(null);
    setUserUpVote(1);

    const voteUpdate = { inc_votes: 1 };

    if (userUpVote === 0) {
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
    } else {
      setErr("You can not up vote more than once");
    }
  };

  const downVote = () => {
    setErr(null);
    setUserDownVote(1);

    if (userDownVote === 0) {
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
    } else {
      setErr("You can not down vote more than once.");
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
      <section>{err ? <p>{err} </p> : null}</section>
    </section>
  );
};
