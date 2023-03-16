export const Categories = ({ categories }) => {
  return (
    <section>
      <header>
        <h2>Categories</h2>
      </header>
      <main>
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.slug}>
                <h3>
                  {category.slug[0].toUpperCase() + category.slug.slice(1)}
                </h3>
                <p>Description: {category.description}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
};
