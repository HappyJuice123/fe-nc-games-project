import { useEffect, useState } from "react";
import { getCommentsByReviewId, getUsers } from "../api";

import { avatarUrl, commentAuthor } from "../utils";

export const Comments = ({ review_id, singleReview }) => {
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
        <p>No Comments</p>
      ) : (
        <section className="comments-area">
          <p id="comment-title">Comments</p>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.comment_id} className="comments-section">
                  <section className="comment-avatar">
                    <p className="comment-author">
                      <img
                        src={avatarUrl(users, comment)}
                        alt={`${comment.author} avatar`}
                        className="avatar-img"
                      />
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