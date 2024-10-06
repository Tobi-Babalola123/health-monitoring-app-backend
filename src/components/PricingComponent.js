import React from "react";
import "./PricingComponent.css"; // Create a CSS file for styling

const pricingOptions = [
  { id: 1, title: "Basic", price: "$10", description: "Basic features" },
  { id: 2, title: "Standard", price: "$20", description: "Standard features" },
  { id: 3, title: "Premium", price: "$30", description: "All features" },
];

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        {pricingOptions.map((option) => (
          <div key={option.id} className="pricing-card">
            <h3>{option.title}</h3>
            <p>{option.price}</p>
            <p>{option.description}</p>
            <button className="pricing-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
