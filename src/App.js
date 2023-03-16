import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Reviews } from "./Components/Reviews";
import { useEffect, useState } from "react";
import { getReviews } from "./api";
import { FeaturedReviews } from "./Components/FeaturedReviews";
import { SingleReview } from "./Components/SingleReview";

function App() {
  const [reviews, setReviews] = useState([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState(true);
  const [login, setLogin] = useState(null);

  useEffect(() => {
    setIsReviewsLoading(true);
    getReviews().then((data) => {
      setIsReviewsLoading(false);
      const reviewsData = data.reviews;
      setReviews(reviewsData);
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
            <Reviews reviews={reviews} isReviewsLoading={isReviewsLoading} />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview login={login} />}
        />
      </Routes>
    </div>
  );
}

export default App;
