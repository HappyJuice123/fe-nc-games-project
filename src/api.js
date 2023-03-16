import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jasons-backend-games-project.onrender.com/api",
});

export const getReviews = (category) => {
  return gamesApi
    .get("/reviews", {
      params: {
        category: category,
      },
    })
    .then((result) => {
      return result.data;
    });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((result) => {
    return result.data;
  });
};

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`reviews/${review_id}/comments`).then((result) => {
    return result.data;
  });
};

export const getUsers = () => {
  return gamesApi.get("/users").then((result) => {
    return result.data;
  });
};

export const patchReview = (review_id, voteUpdate) => {
  return gamesApi.patch(`/reviews/${review_id}`, voteUpdate).then((result) => {
    return result.data;
  });
};

export const postComment = (review_id, newComment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((result) => {
      return result.data;
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((result) => {
    return result.data;
  });
};
