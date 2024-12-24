import React from 'react'
const Menu = () => {
  return (
    <>
    <section className='menu' id='menu'>
  <div className="container">
    <div className="heading_section">
      <h1 className="heading">POPULAR DISHES</h1>
      <p>
        Discover the most beloved flavors from around the world. Whether you're craving spicy Aagri dishes from Maharashtra, indulgent Northern Punjabi comfort food, the smoky goodness of Tandoor-cooked meals, or the timeless classics of Chinese cuisine, this section celebrates the diverse tastes that have captivated food lovers globally. Dive in and treat your taste buds!
      </p>
    </div>

    <div className="dishes">
      {/* Aagri Cuisine */}
      <div className="dish-card">
        <div className="dish-image">
          <img src="punjab.jpg" alt="Aagri Cuisine" />
        </div>
        <div className="dish-info">
          <h3>Aagri Cuisine</h3>
          <p>Aagri cuisine, from the coastal regions of Maharashtra, offers a bold, fiery blend of spices and flavors. Known for its seafood-based dishes, it brings together fresh fish, tangy tamarind, and fiery chilies to create an unforgettable experience.</p>
        </div>
      </div>

      {/* Northern Punjabi Cuisine */}
      <div className="dish-card">
        <div className="dish-image">
          <img src="/tandoori.jpg" alt="Northern Punjabi Cuisine" />
        </div>
        <div className="dish-info">
          <h3>Northern Punjabi</h3>
          <p>Rich, indulgent, and bursting with flavor – Northern Punjabi cuisine is known for its hearty dishes like butter chicken, dal makhani, and stuffed parathas. The bold use of spices, butter, and cream makes it a comfort food favorite across the globe.</p>
        </div>
      </div>

      {/* Chinese Cuisine */}
      <div className="dish-card">
        <div className="dish-image">
          <img src="chilly.jpg" alt="Chinese Cuisine" />
        </div>
        <div className="dish-info">
          <h3>Chinese Cuisine</h3>
          <p>Chinese cuisine offers an amazing range of flavors, from sweet and savory to spicy and sour. Whether you’re enjoying crispy spring rolls, aromatic dumplings, or a hot bowl of noodles, the variety and texture of Chinese food are truly unbeatable.</p>
        </div>
      </div>

     
    </div>
  </div>
</section>


    </>
  )
}

export default Menu;