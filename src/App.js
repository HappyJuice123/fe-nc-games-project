import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Reviews } from "./Components/Reviews";
import { useEffect, useState } from "react";
import { getReviews } from "./utils";
import { FeaturedReviews } from "./Components/FeaturedReviews";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) => {
      const reviewsData = data.reviews;
      setReviews(reviewsData);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<FeaturedReviews reviews={reviews} />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
      </Routes>
    </div>
  );
}

export default App;
