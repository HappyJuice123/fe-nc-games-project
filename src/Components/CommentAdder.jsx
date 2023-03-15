import { useState, useEffect } from "react";
import { postComment } from "../api";

export const CommentAdder = ({ review_id, login, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    setErr(null);
  }, [login]);

  const handleSubmit = (event) => {
    setIsPosting(true);
    setNewComment("");
    setErr(null);
    event.preventDefault();
    const addNewComment = {
      username: login,
      body: newComment,
    };

    postComment(review_id, addNewComment)
      .then((data) => {
        const addedComment = data.addComment;
        setComments((currentComments) => {
          setIsPosting(false);
          return [addedComment, ...currentComments];
        });
      })
      .catch((err) => {
        setIsPosting(false);
        if (!login) {
          setErr("Please sign in to comment.");
        } else {
          setErr("Something went wrong, please try again.");
        }
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post-comment">Post a Comment</label>
        <br></br>
        <input
          type="text"
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
          value={newComment}
          id="post-comment"
        ></input>
        <button type="button">Post</button>
      </form>
      <section>{isPosting ? <p>Posting comment...</p> : null}</section>
      <section>{err ? <p>{err} </p> : null}</section>
    </section>
  );
};
