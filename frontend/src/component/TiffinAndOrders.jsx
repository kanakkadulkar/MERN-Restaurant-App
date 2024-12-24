import React from 'react';

// Accessing the environment variables with the REACT_APP_ prefix
const ownerPhoneNumber = process.env.REACT_APP_PHONE;
const tifPhoneNumber = process.env.REACT_APP_TIF;

const TiffinAndOrders = () => {
  return (
    <div className="tiffin-and-orders" id="tiffin">
      <section className="tiffin-section">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">Tiffin Service & Party Orders</h1>
            <p>
              We provide delicious tiffin services to various schools and also take party orders for all occasions. Whether you're a student, professional, or hosting a celebration, we've got you covered!
            </p>
          </div>
          <div className="services">
            <div className="service-item">
              <h3>School Tiffin Service</h3>
              <p>We offer nutritious and tasty tiffins for school children. Contact us to schedule regular deliveries!</p>
              <p>St Xaviers Manickpur Vasai W</p>
              <p>IGS Madhuban Vasai E</p>
              <p>Call us for Tiffin Service:</p>
              <a href={`tel:${tifPhoneNumber}`} className="link-button">{tifPhoneNumber}</a>
            </div>
            <div className="service-item">
              <h3>Party Orders</h3>
              <p>Planning a party or event? We cater to all kinds of parties with a menu that suits your needs and preferences.</p>
            </div>
          </div>
          <div className="order-links">
            <p>Order Now:</p>
            <div className="links">
              <a href="https://www.swiggy.com/menu/492783?source=sharing" target="_blank" rel="noopener noreferrer" className="link-button">Order via Swiggy</a>
              <a href="https://zomato.onelink.me/xqzv/8eq9lesf" target="_blank" rel="noopener noreferrer" className="link-button">Order via Zomato</a>
            </div>
            <div className="home-delivery">
              <p>Or Call us for Home Delivery:</p>
              <a href={`tel:${ownerPhoneNumber}`} className="link-button">{ownerPhoneNumber}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TiffinAndOrders;



