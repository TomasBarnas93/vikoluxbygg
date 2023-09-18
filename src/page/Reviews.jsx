import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const placeId = "ChIJZb3oKiQ_iWQRBmMaOiYTe6M";
  const apiKey = "AIzaSyBs35n1h1X-foHoTNYyqWfIQjtD7h2jxDA";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=review&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data.result.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {reviews ? (
        reviews.map((review, index) => (
          <div key={index}>
            <p>{review.author_name}: {review.text}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Reviews;
