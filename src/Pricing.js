
import React from 'react';
import './Pricing.css'; // Import your CSS file for styling

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$9.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: '$19.99/month',
      features: ['All Basic Plan features', 'Feature 4', 'Feature 5'],
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$29.99/month',
      features: ['All Standard Plan features', 'Feature 6', 'Feature 7'],
    },
  ];

  return (
    <section id="pricing">
        <h2>Pricing Plans</h2>
      <div className="pricing-container">
        {pricingPlans.map(plan => (
          <div key={plan.id} className="pricing-plan">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-button">Subscribe</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
