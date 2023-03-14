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

export const featuredReviewsIndex = (reviews) => {
  const indexArr = [];
  if (reviews) {
    for (let i = 0; i < 3; i += 0) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      if (indexArr.indexOf(randomIndex) === -1) {
        indexArr.push(randomIndex);
        i++;
      }
    }
  }
  return indexArr;
};

export const patchReview = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((result) => {
      return result.data;
    });
};
