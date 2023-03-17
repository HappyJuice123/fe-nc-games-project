import { deleteComment } from "../api";
import { useEffect, useState } from "react";

export const CommentDeleter = ({ login, comment, setComments }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const [err, setErr] = useState(null);

  const { comment_id, author } = comment;

  useEffect(() => {
    setErr(null);
  }, [login]);

  const handleDelete = () => {
    if (author === login) {
      setErr(null);
      setIsDeleting(true);
      deleteComment(comment_id)
        .then(() => {
          setErr(null);
          setIsDeleting(false);

          setComments((currentComments) => {
            const copyCurrentComments = [...currentComments];

            const commentIdArr = copyCurrentComments.map(
              (copyCurrentComment) => {
                return copyCurrentComment.comment_id;
              }
            );

            const commentIndextoDelete = commentIdArr.indexOf(comment_id);

            copyCurrentComments.splice(commentIndextoDelete, 1);

            return copyCurrentComments;
          });
        })
        .catch(() => {
          setErr("Something wrong happened, please try again");
        });
    } else if (!login) {
      setErr("You need be signed in to delete comments.");
    }
  };

  return login === comment.author ? (
    <section>
      <button type="button" onClick={handleDelete}>
        Delete Comment
      </button>
      {isDeleting ? <p>Deleting Comment...</p> : null}
      {err ? <p>{err}</p> : null}
    </section>
  ) : null;
};
