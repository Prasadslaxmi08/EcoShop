import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <div className="community-container">
      <div className="blur-container">
        <div className="blur-background"></div>
        <div className="blur-text">
          <h3>Build a Sustainable Community</h3>
        </div>
      </div>
      <div className="boxes-container">
        {/* Box 1 */}
        <div className="box">
          <img src="tree.jpeg" alt="Image 1" />
          <div className="box-text">Find Eco-Friendly</div>
        </div>
        {/* Box 2 */}
        <div className="box">
          <img src="eye.jpeg" alt="Image 2" />
          <div className="box-text">Eco-Friendly Products</div>
        </div>
        {/* Box 3 */}
        <div className="box">
          <img src="leaf.jpeg" alt="Image 3" />
          <div className="box-text">Calculate impact</div>
        </div>
        {/* Box 4 */}
        <div className="box">
          <img src="calc2.jpeg" alt="Image 4" />
          <div className="box-text">Environmental</div>
        </div>
      </div>
      {/* Additional Section */}
      <div className="additional-section">
        <h4 className="additional-section-heading">More Information</h4>
        <div className="additional-boxes-container">
          {/* Additional Box 1 */}
          <div className="additional-box">
            <img src="pl.jpeg" alt="Image 1" />
            <div className="additional-box-text">Sustainable Shrimp</div>
            <button className="more-info-button">More Info</button>
          </div>
          {/* Additional Box 2 */}
          <div className="additional-box">
            <img src="leaf.jpeg" alt="Image 2" />
            <div className="additional-box-text">Nature Inspired Products</div>
            <button className="more-info-button">More Info</button>
          </div>
          {/* Additional Box 3 */}
          <div className="additional-box">
            <img src="sh.jpeg" alt="Image 3" />
            <div className="additional-box-text">Sustainable Shopping Tips</div>
            <button className="more-info-button">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;