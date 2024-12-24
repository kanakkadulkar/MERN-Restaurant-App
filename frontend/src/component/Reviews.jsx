import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    // Dynamically load the Elfsight script when the component mounts
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.onload = () => {
      // You can trigger any necessary actions after the script is loaded
    };
    document.body.appendChild(script);
    
    // Clean up script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="reviews">
      <section className="reviews-section">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">What Our Customers Say</h1>
            <p>See the latest reviews from our happy customers and find out why they love our service!</p>
          </div>
          {/* The Elfsight Google Reviews widget container */}
          <div 
            className="elfsight-google-reviews" 
            dangerouslySetInnerHTML={{
              __html: '<div class="elfsight-app-8903a6ef-0df0-4bf0-a072-37daec8805ad" data-elfsight-app-lazy></div>'
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Reviews;

