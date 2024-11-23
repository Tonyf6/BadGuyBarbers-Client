import React, { useState } from 'react';
import placeholder from '../assets/man silhouette.jpg';
import { Check } from 'lucide-react';

interface Service {
  name: string;
  duration: string;
  price: number;
}

const BarberServices = () => {
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [primaryService, setPrimaryService] = useState<Service | null>(null);

  const services = [
    {
      name: 'Haircut',
      duration: '45 mins',
      price: 35
    },
    {
      name: 'Haircut & Beard Groom',
      duration: '1 hr',
      price: 45
    },
    {
      name: 'Kids cut 12 & under',
      duration: '30 min',
      price: 30
    },
    {
      name: 'Razor Fade',
      duration: '45 mins',
      price: 40
    },
    {
      name: 'Beard Groom/Line Up',
      duration: '30 mins',
      price: 25
    },
    {
      name: 'Senior',
      duration: '30 mins',
      price: 25
    }
  ];

  const handleServiceSelection = (service: Service) => {
    if (!primaryService) {
      setPrimaryService(service);
      setSelectedServices([service]);
    } else {
      if (selectedServices.find(s => s.name === service.name)) {
        setSelectedServices(selectedServices.filter(s => s.name !== service.name));
      } else {
        setSelectedServices([...selectedServices, service]);
      }
    }
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0);
  };

  return (
    <div className="barber-selection">
      <h1 className="title">Choose a service</h1>

      <div className="content-wrapper">
        <div className="flex-1">
          {/* Primary Service Section */}
          {primaryService && (
            <div className="mb-8">
              <div className={`
                service-card bg-black text-white relative
                ${selectedServices.includes(primaryService) ? 'selected' : ''}
              `}>
                <div className="service-details">
                  <h2>{primaryService.name}</h2>
                  <p className="text-gray-400">{primaryService.duration}</p>
                </div>
                <div className="service-price text-white">
                  ${primaryService.price}
                </div>
                <div className="absolute top-4 right-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )}

          {/* Additional Services Section */}
          {primaryService && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Anything you wish to add?</h2>
              <div className="service-cards">
                {services
                  .filter(service => service.name !== primaryService.name)
                  .map((service, index) => {
                    const isSelected = selectedServices.find(s => s.name === service.name);
                    return (
                      <div
                        key={index}
                        onClick={() => handleServiceSelection(service)}
                        className={`
                          service-card
                          ${isSelected ? 'bg-black text-white' : 'bg-white'}
                        `}
                      >
                        <div className="service-details">
                          <h2>{service.name}</h2>
                          <p className={isSelected ? 'text-gray-400' : 'text-gray-500'}>
                            {service.duration}
                          </p>
                        </div>
                        <div className={`service-price ${isSelected ? 'text-white' : ''}`}>
                          ${service.price}
                        </div>
                        {isSelected && (
                          <div className="absolute top-4 right-4">
                            <Check className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Initial Service Selection */}
          {!primaryService && (
            <div className="service-cards">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceSelection(service)}
                  className="service-card"
                >
                  <div className="service-details">
                    <h2>{service.name}</h2>
                    <p>{service.duration}</p>
                  </div>
                  <div className="service-price">
                    ${service.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="info-card">
          <h2 className="mb-1">Your order</h2>
          <p className="text-sm text-gray-400 mb-6">Bad Guy Barbers</p>
          
          <div className="flex items-center gap-3 mb-6">
            <img
              src={placeholder}
              alt="Barber profile"
              className="w-8 h-8 rounded-sm"
            />
            <span className="text-gray-900">Tony F.</span>
          </div>

          {selectedServices.length > 0 && (
            <div className="space-y-4">
              {selectedServices.map((service, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    {index === 0 ? (
                      <p className="text-gray-900">{service.name}</p>
                    ) : (
                      <p className="text-gray-900">+ {service.name}</p>
                    )}
                    <p className="text-sm text-gray-500">{service.duration}</p>
                  </div>
                  <p className="text-gray-900">${service.price}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${calculateTotal()}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg mt-4">
                Choose a time
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarberServices;