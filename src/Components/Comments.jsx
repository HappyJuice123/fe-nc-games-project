import { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../utils";

export const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((data) => {
      const commentsData = data.comments;
      setComments(commentsData);
    });
  }, [review_id]);
};
