import React from 'react'
import { FaInstagram } from 'react-icons/fa'; 

const Social = () => {
  return (
    <div>
      <section className="social-media">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">FOLLOW US ON INSTAGRAM</h1>
          <p>Stay updated with our latest dishes, offers, and behind-the-scenes moments. Follow us on Instagram!</p>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/apratimrestaurantvasai/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Social;
