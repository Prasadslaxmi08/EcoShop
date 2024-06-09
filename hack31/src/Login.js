import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call to backend for authentication)
    console.log('Login with:', email, password);
    // For demonstration, assume login is successful
    setIsLoggedIn(true);
  };

  // Redirect to Home if logged in
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div style={containerStyle}>
      <div style={ecoShopStyle}>EcoShop</div>
      <div style={loginContainerStyle}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <div style={inputGroupStyle}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={submitButtonStyle}>Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
      <div style={backgroundContainerStyle}>
        <div style={backgroundOverlayStyle}>
          <div style={aboutUsContentStyle}>
            <h2>About Us</h2>
            <p>
              EcoShop is committed to paving the way towards a sustainable world. We offer a curated selection of eco-friendly products sourced from various locations, helping you make environmentally conscious choices with ease. Explore our collection of sustainable items and support local vendors dedicated to crafting eco-friendly products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS styles as JS objects
const containerStyle = {
  display: 'flex',
  height: '100vh',
};

const ecoShopStyle = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333', // Adjust color as needed
};

const loginContainerStyle = {
  flex: '1',
  backgroundColor: 'white',
  color: '#333',
  padding: '40px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const formStyle = {
  width: '100%', // Full width form
};

const inputGroupStyle = {
  marginBottom: '20px',
  width: '100%', // Make input group full width
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left', // Align text left
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const submitButtonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  padding: '12px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100%', // Make button full width
};

const backgroundContainerStyle = {
  flex: '3',
  position: 'relative',
  background: 'url("https://i0.wp.com/www.circularonline.co.uk/wp-content/uploads/2023/05/iStock-1390050937.jpg?resize=860%2C516&ssl=1")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const backgroundOverlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const aboutUsContentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  padding: '20px',
  borderRadius: '8px',
};

export default Login;
