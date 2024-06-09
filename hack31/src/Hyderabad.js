import React from 'react';

const Hyderabad = () => {
  return (
    <div>
      <header style={headerStyle}>
        <div style={logoStyle}>EcoShop</div>
        <div style={searchContainerStyle}>
          <input type="text" placeholder="Search products..." style={searchInputStyle} />
          <button style={searchButtonStyle}>Search</button>
        </div>
      </header>

      <div style={heroSectionStyle}>
        <div style={overlayStyle}>
          <h1>Welcome to Hyderabad EcoShop</h1>
        </div>
      </div>

      <h2 style={sectionTitleStyle}>Local Vendors in Hyderabad</h2>
      <div style={productListStyle}>
        <ProductCard
          name="Hitec-City"
          price="19.99"
          description="Organic furnish"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaDjFFJJiG__bPsX653GR6cloTWd8CnCfhg&s"
        />
        <ProductCard
          name="Dilsukhnagar"
          price="24.99"
          description="Recylable Clothing"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Xoj3xajGmFz9HuWOVMPFz-wZXjn680rYkPHigmoV1zOGb_brT3O2PRkj7J5hUiA2duI&usqp=CAU"
        />
        <ProductCard
          name="Karmanghat"
          price="15.99"
          description="Vegan Food"
          imageSrc="https://i.pinimg.com/736x/08/95/07/08950718448875904e5aecd25599aac3.jpg"
        />
        <ProductCard
          name="Sainikpuri"
          price="29.99"
          description="Handlooms"
          imageSrc="https://designessentiamagazine.com/wp-content/uploads/2020/09/31.jpg"
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
      <button style={addToCartButtonStyle}>View Products</button>
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
  backgroundImage: 'url("https://facts.net/wp-content/uploads/2023/06/41-facts-about-hyderabad-1688100411.jpeg")',
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

export default Hyderabad;