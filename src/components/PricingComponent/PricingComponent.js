import React from "react";
import "./PricingComponent.css"; // Add custom styling and animations

const pricingOptions = [
  {
    id: 1,
    title: "Basic Health Plan",
    price: "$10/month",
    features: [
      "Basic health support",
      "Access to standard health resources",
      "Monthly health tips",
    ],
  },
  {
    id: 2,
    title: "Standard Health Plan",
    price: "$20/month",
    features: [
      "Priority health support",
      "Access to premium health resources",
      "Weekly health tips and webinars",
    ],
  },
  {
    id: 3,
    title: "Premium Health Plan",
    price: "$30/month",
    features: [
      "24/7 health support",
      "Full access to all health tools and resources",
      "Unlimited consultations and personalized health plans",
    ],
  },
];

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      <h2>Our Health Plans</h2>
      <div className="pricing-cards">
        {pricingOptions.map((option) => (
          <div key={option.id} className="pricing-card">
            <h3>{option.title}</h3>
            <p className="pricing-price">{option.price}</p>
            <ul className="pricing-features">
              {option.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
