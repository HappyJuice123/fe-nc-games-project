import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Reviews } from "./Components/Reviews";
import { useEffect, useState } from "react";
import { getReviews } from "./utils";
import { FeaturedReviews } from "./Components/FeaturedReviews";
import { SingleReview } from "./Components/SingleReview";

function App() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((data) => {
      setIsLoading(false);
      const reviewsData = data.reviews;
      setReviews(reviewsData);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FeaturedReviews reviews={reviews} />} />
        <Route
          path="/reviews"
          element={<Reviews reviews={reviews} isLoading={isLoading} />}
        />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
