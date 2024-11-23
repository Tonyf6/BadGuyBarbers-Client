import React, { useState } from 'react';
import placeholder from '../assets/man silhouette.jpg';

const BarberSelection = () => {
  const [selectedBarber, setSelectedBarber] = useState(null);

  const barbers = [
    {
      name: 'David J.',
      availability: 'Available Tomorrow',
      image: placeholder,
    },
    {
      name: 'Sam L.',
      availability: 'Available Friday, Nov 1',
      image: placeholder,
    },
    {
      name: 'Tony F.',
      availability: 'Available Tuesday, Nov 5',
      image: placeholder,
    },
  ];

  return (
    <div className="barber-selection">
      <h1 className="title">Choose a professional</h1>

      <div className="content-wrapper">
        {/* Barber Cards */}
        <div className="barber-cards">
          {barbers.map((barber, index) => (
            <div
              key={index}
              className={`barber-card ${selectedBarber?.name === barber.name ? 'selected' : ''}`}
              onClick={() => setSelectedBarber(barber)}
            >
              <div className="image-container">
                <img src={barber.image} alt={`${barber.name}'s profile`} />
              </div>
              <h2>{barber.name}</h2>
              <p>{barber.availability}</p>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="info-card">
          <h2>Bad Guy Barbers</h2>
          <div className="info-content">
            {selectedBarber ? (
              <>
                <p><strong>Name:</strong> {selectedBarber.name}</p>
                <p><strong>Availability:</strong> {selectedBarber.availability}</p>
              </>
            ) : (
              <p>Select a barber to view details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberSelection;