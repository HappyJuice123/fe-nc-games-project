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

export const getReviewById = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then((result) => {
    return result.data;
  });
};

export const featuredReviewsIndex = (reviews) => {
  const indexArr = [];

  for (let i = 0; indexArr.length < 3; i++) {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    if (reviews) {
      if (indexArr.indexOf(randomIndex) === -1) {
        indexArr.push(randomIndex);
        i += 1;
      }
    }
  }
  return indexArr;
};
