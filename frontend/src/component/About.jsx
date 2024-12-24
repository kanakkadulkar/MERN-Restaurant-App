import React from "react";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Discover the culinary gem nestled in the heart of Diwanman village that's Diwanman Talav is Restaurant Apratim. Renowned for its authentic flavors and warm hospitality, Apratim offers a delightful dining experience amidst the serene surroundings of the village. From traditional dishes crafted with locally sourced ingredients to innovative culinary creations, our menu caters to diverse palates. Whether you're seeking a casual meal with family or a romantic dinner for two, our cozy ambiance and flavorful dishes are sure to leave a lasting impression. Join us at Restaurant Apratim and embark on a culinary journey that celebrates the essence of life with every bite.
            </p>
            
            <a href="/menu.pdf" download className="menuBtn download-btn">
  OUR MENU
</a>
          </div>
          <div className="banner">
            <img src="/ap.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;