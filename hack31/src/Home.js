import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header style={headerStyle}>
        <div style={logoStyle}>EcoShop</div>
        <nav>
          <ul style={navListStyle}>
            <li style={navItemStyle}><Link to="/" style={navLinkStyle}>Home</Link></li>
            <li style={navItemStyle}><Link to="/products" style={navLinkStyle}>Products</Link></li>
            <li style={navItemStyle}><Link to="/calculator" style={navLinkStyle}>Loyalty</Link></li>
            <li style={navItemStyle}><Link to="/loyalty" style={navLinkStyle}>Community</Link></li>
            <li
              style={navItemStyle}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span style={navLinkStyle}>Location</span>
              {dropdownOpen && (
                <ul style={dropdownContentStyle}>
                  <li><Link to="/location1" style={dropdownLinkStyle}>Hyderabad</Link></li>
                  <li><Link to="/location2" style={dropdownLinkStyle}>Mumbai</Link></li>
                  <li><Link to="/location3" style={dropdownLinkStyle}>Pune</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search products..." style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>
      </header>

      <div style={heroSectionStyle}>
        <div style={overlayStyle}>
          <h1>Explore Eco-Friendly Products</h1>
          <button style={exploreButtonStyle}>Explore Now</button>
        </div>
      </div>

      <h2 style={sectionTitleStyle}></h2>
      <div style={productListStyle}>
        <ProductCard
          name="Tote Bags"
          price="19.99"
          description="Discover eco-friendly tote bags crafted from recycled materials, perfect for stylishly carrying your essentials while supporting the planet."
          imageSrc="https://www.shutterstock.com/image-photo/woman-holding-jute-bag-sack-260nw-2205230359.jpg"
        />
        <ProductCard
          name="Room Decor"
          price="24.99"
          description="Transform your space with sustainable room decor, featuring ethically sourced and handmade pieces that blend elegance with eco-consciousness."
          imageSrc="https://energytheory.com/wp-content/uploads/2023/06/JAN23-What-are-Eco-Friendly-Products-1.jpg"
        />
        <ProductCard
          name="Essential Oils"
          price="15.99"
          description="Elevate your wellness routine with our 100% pure essential oils, sourced sustainably to bring nature's best aromas and benefits into your home."
          imageSrc="https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/organic4.jpg"
        />
        <ProductCard
          name="Beauty Products"
          price="29.99"
          description="Indulge in our range of natural beauty products, made with organic ingredients and cruelty-free practices for a radiant and responsible self-care experience."
          imageSrc="https://lajolla.com/wp-content/uploads/2023/08/How-to-Be-More-Eco-Friendly-1024x576.jpg"
        />
      </div>

      <footer style={footerStyle}>
        <div style={footerItemStyle}>About Us</div>
        <div style={footerItemStyle}>Contact</div>
        <div style={footerItemStyle}>Terms and Conditions</div>
      </footer>
    </div>
  );
}

const ProductCard = ({ name, price, description, imageSrc }) => {
  return (
    <div style={productCardStyle}>
      <img src={imageSrc} alt={name} style={productImageStyle} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button style={addToCartButtonStyle}>Add to Cart</button>
    </div>
  );
}

// CSS styles as JS objects
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f8f8f8'
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold'
};

const navListStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '15px',
  padding: 0,
  margin: 0
};

const navItemStyle = {
  display: 'inline',
  position: 'relative'
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  cursor: 'pointer'
};

const dropdownContentStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#f9f9f9',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  listStyleType: 'none',
  padding: '0',
  margin: '0',
};

const dropdownLinkStyle = {
  display: 'block',
  padding: '12px 16px',
  textDecoration: 'none',
  color: 'black',
  backgroundColor: '#fff',
  cursor: 'pointer'
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const searchInputStyle = {
  padding: '5px',
  width: '250px',
  marginRight: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const searchButtonStyle = {
  padding: '6px 12px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const heroSectionStyle = {
  position: 'relative',
  height: '300px',
  backgroundImage: 'url("https://cpmirror.com/wp-content/uploads/2024/03/AdobeStock_726643423-min.jpeg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(5px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white'
};

const exploreButtonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const sectionTitleStyle = {
  textAlign: 'center',
  margin: '20px 0'
};

const productListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '20px'
};

const productCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '20px',
  textAlign: 'center',
  width: '200px',
  margin: '10px'
};

const productImageStyle = {
  width: '100%',
  height: 'auto'
};

const addToCartButtonStyle = {
  padding: '10px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const footerStyle = {
  backgroundColor: '#A9A9A9',
  color: 'white',
  padding: '5px',
  textAlign: 'center'
};
const footerItemStyle = {
  flex: 1
};

export default Home;