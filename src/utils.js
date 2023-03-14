import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://jasons-backend-games-project.onrender.com/api",
});

export const getReviews = () => {
  return reviewsApi.get("/reviews").then((result) => {
    return result.data;
  });
};

export const getReviewById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then((result) => {
    return result.data;
  });
};
