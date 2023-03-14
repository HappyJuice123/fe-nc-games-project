import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://jasons-backend-games-project.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((result) => {
    return result.data;
  });
};

// CHANGE reviewsApi to gamesApi

export const getCommentsByReviewId = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then((result) => {
    return result.data;
  });
};
