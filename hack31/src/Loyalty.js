import React from 'react';
import Navbar from './Navbar'; // Import Navbar component

const coupons = [
  {
    id: 1,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c-wzxFHpC0ic9MZvmxEMm9sO9VgTq8-o9g&s',
    discount: '$ 10',
    brand: ' Okhai Vouchers',
    validUntil: 'Valid until 01 October 2024',
  },
  {
    id: 2,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pznHgLsiWVxNnMitcTbSd2-AJkU2NlUOMw&s',
    discount: '25% OFF',
    brand: 'Eco Femme Vouchers',
    validUntil: 'Valid until 03 March 2022',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/The_Body_Shop_logo_2020.svg/1200px-The_Body_Shop_logo_2020.svg.png',
    discount: 'Buy 1 get 1 Free',
    brand: 'The Body Shop Vouchers',
    validUntil: 'Valid until 11 September 2022',
  },
  {
    id: 4,
    logo: 'https://www.applivery.com/wp-content/uploads/2023/07/ecoalf-story-mdm.png',
    discount: 'Pay 1 take 2',
    brand: ' Ecoalf Vouchers',
    validUntil: 'Valid until 03 October 2022',
  },
];

const Loyalty = () => {
  return (
    <div>
      <Navbar /> {/* Navbar component */}
      <div style={styles.pageContainer}>
        <div style={styles.upperHalf}>
          <div style={styles.blurBackground}></div>
          <div style={styles.imageContent}>
            <h2 style={styles.imageText}>For your step towards sustainability, we offer you some rewards</h2>
          </div>
        </div>
        <div style={styles.lowerHalf}>
          {coupons.map((coupon) => (
            <div style={styles.coupon} key={coupon.id}>
              <img src={coupon.logo} alt={coupon.brand} style={styles.couponImage} />
              <div style={styles.couponDetails}>
                <h2 style={styles.couponDiscount}>{coupon.discount}</h2>
                <p style={styles.couponBrand}>{coupon.brand}</p>
                <span style={styles.couponValidity}>{coupon.validUntil}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Change height to minHeight to ensure it stretches to the bottom
  },
  upperHalf: {
    flex: '1',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hDNJvuZ_O9ZyliWk-2ZdX6iELB_CRXruNw&s")', // Add your background image URL
    backgroundSize: 'cover',
    filter: 'blur(8px)',
    zIndex: -1,
  },
  imageContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imageText: {
    fontSize: '24px', // Increased font size
    color: '#fff',
    textAlign: 'center',
    maxWidth: '80%',
  },
  lowerHalf: {
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    flexWrap: 'wrap', // Allow coupons to wrap to the next line
  },
  coupon: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px', // Increased box size
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginRight: '10px',
    marginBottom: '10px', // Add margin bottom to create space between coupons
  },
  couponImage: {
    width: '48px',
    height: '48px',
    marginRight: '10px',
  },
  couponDetails: {
    flex: 1,
  },
  couponDiscount: {
    margin: 0,
    fontSize: '18px',
    color: '#333',
  },
  couponBrand: {
    margin: '5px 0',
    fontSize: '14px',
    color: '#666',
  },
  couponValidity: {
    fontSize: '12px',
    color: '#999',
  },
};

export default Loyalty;