import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Reviews } from "./Components/Reviews";
import { useEffect, useState } from "react";
import { getReviews, getCategories } from "./api";
import { FeaturedReviews } from "./Components/FeaturedReviews";
import { SingleReview } from "./Components/SingleReview";
import { Categories } from "./Components/Categories";

function App() {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState(true);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setIsReviewsLoading(true);
    getReviews().then((data) => {
      setIsReviewsLoading(false);
      const reviewsData = data.reviews;
      setReviews(reviewsData);
    });

    getCategories().then((data) => {
      const categoryData = data.categories;
      setCategories(categoryData);
    });
  }, []);

  return (
    <div className="App">
      <Header login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<FeaturedReviews reviews={reviews} />} />
        <Route
          path="/reviews"
          element={
            <Reviews
              reviews={reviews}
              isReviewsLoading={isReviewsLoading}
              categories={categories}
              setReviews={setReviews}
            />
          }
        />
        <Route
          path="/categories"
          element={<Categories categories={categories} />}
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview login={login} />}
        />
        <Route
          path="/*"
          element={<p>Error 404 - this page does not exist.</p>}
        />
      </Routes>
    </div>
  );
}

export default App;
