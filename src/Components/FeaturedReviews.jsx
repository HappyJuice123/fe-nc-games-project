export const FeaturedReviews = ({ reviews }) => {
  const indexArr = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    if (indexArr.indexOf(randomIndex) === -1) {
      indexArr.push(randomIndex);
      i += 1;
    }
    console.log(indexArr);
  }

  return reviews.length > 0 ? (
    <section>
      <header>
        <h2>Featured Reviews</h2>
      </header>
      <main>
        <ul>
          {indexArr.map((index) => {
            return (
              <li key={`featured-${reviews[index].review_id}`}>
                <h3>{reviews[index].title}</h3>
                <img
                  src={reviews[index].review_img_url}
                  alt={reviews[index].title}
                />
                <p>Review: {reviews[index].review_body}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  ) : (
    <p></p>
  );
};
