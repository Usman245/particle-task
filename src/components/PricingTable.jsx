import React from 'react';
import './Pricingtable.css';

const PricingTable = () => {
  return (
    <div className="pricing-container">
      <div className='title-container'>
      <h1 className="pricing-title">Marketing Platform</h1>
      </div>

    <div className='pricing-sub-container'>
    <div className="pricing-header">
    <div className='pricing-column'></div>
        <div className="pricing-column">
          <span>Free</span>
          <button className="pricing-button">Sign Up</button>
        </div>
        <div className="pricing-column">
          <span>Starter</span>
          <button className="pricing-button">Sign Up</button>
        </div>
        <div className="pricing-column">
          <span>Business</span>
          <button className="pricing-button">Sign Up</button>
        </div>
        <div className="pricing-column">
          <span>Enterprise</span>
          <button className="pricing-button">Get a demo</button>
        </div>
      </div>

      {/* Feature List */}
      <div className="pricing-features">
        <div className="feature-row">
          <div className="feature-name">Email Campaigns</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
        </div>

        <div className="feature-row">
          <div className="feature-name">Drag & Drop Editor</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
        </div>

        <div className="feature-row">
          <div className="feature-name">Email Template Gallery</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
        </div>

        <div className="feature-row">
          <div className="feature-name">SMS Marketing</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
        </div>

        <div className="feature-row">
          <div className="feature-name">Email & SMS Personalization</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
          <div className="feature-check">✔</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingTable;
