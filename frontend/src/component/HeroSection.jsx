import React, { useEffect } from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      console.log("Element resized!");
    });

    // Observe the .heroSection element
    const element = document.getElementById("heroSection");
    if (element) {
      resizeObserver.observe(element);
    }

    // Clean up observer when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div class="marquee-container">
        <div class="marquee-text">
            🎄 <span class="star">✨</span> Celebrate Christmas & New Year's Eve with Special Festive Menus and Exclusive Offers! Reserve Your Table Today! <span class="star">✨</span> 🎉
        </div>
    </div>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/tandoor.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
              </div>
              <img className="logo" src="/plate.jpg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="gravy.jpg" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
