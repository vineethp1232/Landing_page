
import React, { useState } from 'react';
import './Features.css'; // Import your CSS file for styling
import feature1 from "../Images/feature1.jpeg"
import feature2 from "../Images/feature2.jpeg"
import feature3 from "../Images/feature3.jpeg"
import feature4 from "../Images/feature4.jpeg"
const FeatureSection = () => {
  const featuresData = [
    {
      id: 1,
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: feature1, 
    },
    {
      id: 2,
      title: 'Feature 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl:feature2, 
    },
    {
      id: 3,
      title: 'Feature 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl:feature3, 
    },
    {
      id: 4,
      title: 'Feature 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl:feature4,
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(null);

  const openFeatureBox = (featureId) => {
    const selectedFeatureData = featuresData.find(feature => feature.id === featureId);
    setSelectedFeature(selectedFeatureData);
  };

  const closeFeatureBox = () => {
    setSelectedFeature(null);
  };

  return (
    <section id="features">
        <h2>Features</h2>
      <div className="feature-container">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-item">
            <img className='feature-image'
              src={feature.imageUrl}
              alt={feature.title}
              onClick={() => openFeatureBox(feature.id)}
            />
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div className="feature-box">
          <img className="feature-box-image" src={selectedFeature.imageUrl} alt={selectedFeature.title} />
          <h3>{selectedFeature.title}</h3>
          <p>{selectedFeature.description}</p>
          <button onClick={closeFeatureBox}>Close</button>
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
