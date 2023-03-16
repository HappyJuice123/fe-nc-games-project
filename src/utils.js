export const featuredReviewsIndex = (reviews) => {
  const indexArr = [];
  let count = 0;

  if (reviews.length > 0) {
    for (let i = 0; count < 3; i++) {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      if (indexArr.includes(randomIndex) === false) {
        indexArr.push(randomIndex);
        count++;
      } else if (i > 20) {
        count += 4;
      }
    }
  }
  return indexArr;
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

export const loggedInUserAvatar = (login, users) => {
  let avatarUrl = "";
  if (login) {
    const loggedInUser = users.find((user) => user.username === login);
    if (loggedInUser) {
      return (avatarUrl += loggedInUser.avatar_url);
    }
  }
  return avatarUrl;
};
