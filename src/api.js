import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jasons-backend-games-project.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((result) => {
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
