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
        i++;
        indexArr.push(randomIndex);
      }
    }
  }
  return indexArr;
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

export const avatarUrl = (users, comment) => {
  if (users && comment) {
    const userAvatar = users.find((user) => {
      return user.username === comment.author;
    });
    if (userAvatar) {
      return userAvatar.avatar_url;
    }
  }
};

export const commentAuthor = (users, comment) => {
  if (users && comment) {
    const authorArr = users.find((user) => {
      return user.username === comment.author;
    });
    if (authorArr) {
      return authorArr.name;
    }
  }
};

// export const patchReview = (review_id) => {
//   return gamesApi
//     .patch(`/reviews/${review_id}`, { inc_votes: 1 })
//     .then((result) => {
//       console.log(result.data);
//       return result.data;
//     });
// };

// insert into singleReview

// patchReview().then((review)=>{
//   if(review.)
// })
