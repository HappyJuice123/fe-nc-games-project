import { useEffect, useState } from "react";
import { getCommentsByReviewId, getUsers } from "../api";

import { avatarUrl, commentAuthor } from "../utils";
import { CommentAdder } from "./CommentAdder";
import { CommentDeleter } from "./CommentDeleter";

export const Comments = ({ review_id, singleReview, login }) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    setIsCommentsLoading(true);
    getCommentsByReviewId(review_id).then((data) => {
      setIsCommentsLoading(false);
      const commentsData = data.comments;
      setComments(commentsData);
    });

    getUsers().then((data) => {
      const usersData = data.users;
      setUsers(usersData);
    });
  }, [review_id]);

  return !isCommentsLoading ? (
    <section className="comments-area">
      {+singleReview.comment_count === 0 ? (
        <section className="no-comments">
          <CommentAdder
            review_id={review_id}
            login={login}
            setComments={setComments}
          />
          <br></br>
          No Comments
        </section>
      ) : (
        <section className="comments-area" id="single-review__comments-area">
          <p id="comment-title">Comments</p>
          <CommentAdder
            review_id={review_id}
            login={login}
            setComments={setComments}
          />
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="comments-section">
                  <section className="comment-avatar">
                    <div className="comment-avatar-img-container">
                      <img
                        src={avatarUrl(users, comment)}
                        alt={`${comment.author} avatar`}
                        className="comment-avatar-img"
                      />
                    </div>
                    <p className="comment-author">
                      {commentAuthor(users, comment)}
                    </p>
                  </section>
                  <section className="comment-text">
                    <p className="comment-body">{comment.body}</p>
                    <p className="comment-votes">Votes: {comment.votes}</p>
                    <p className="comment-time">
                      {comment.author} on {comment.created_at.substring(0, 10)}
                    </p>
                  </section>
                  <section>
                    <CommentDeleter
                      login={login}
                      comment={comment}
                      setComments={setComments}
                    />
                  </section>
                </li>
              );
            })}
          </ul>{" "}
        </section>
      )}
    </section>
  ) : (
    <p>Loading Comments...</p>
  );
};
