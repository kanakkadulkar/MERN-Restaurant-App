import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch reviews from the JSON file
    fetch('/review.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load reviews');
        return res.json();
      })
      .then(data => {
        setReviews(data.testimonials);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the index to show next 3 reviews
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 3;
        if (nextIndex >= reviews.length) {
          return 0; // Loop back to the first 3 reviews
        }
        return nextIndex;
      });
    }, 5000); // Switch reviews every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [reviews.length]);

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<Star key={`star-${i}`} className="star filled" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="star" />);
    }

    return <div className="stars">{stars}</div>;
  };

  if (loading) {
    return <div className="spinner">Loading reviews...</div>;
  }

  return (
    <div className="review-container">
      <div className="review-header">
        <h2>Customer Reviews</h2>
        <p>What our customers say about us</p>
      </div>
      <div className="review-cards-wrapper">
        {/* Display 3 reviews at a time */}
        {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
          <div key={review.userName} className="review-card">
            <div className="user-info">
              <div className="user-name">{review.userName}</div>
            </div>
            {renderStars(review.rating)}
            <p className="description">{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;





