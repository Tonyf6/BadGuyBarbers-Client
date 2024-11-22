import NavBar from "./NavBar";
import { Datepicker } from "flowbite-react";
import { useState } from 'react';

const ChooseTimePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardNumber:any) => {
    setSelectedCard(cardNumber);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-start items-center">
        <div className="flex flex-row gap-8 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
            <button 
              onClick={() => handleCardClick(1)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 1 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 1</h3>
              <p className="text-sm text-gray-600">Content 1</p>
            </button>
            <button 
              onClick={() => handleCardClick(2)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 2 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 2</h3>
              <p className="text-sm text-gray-600">Content 2</p>
            </button>
            <button 
              onClick={() => handleCardClick(3)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 3 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 3</h3>
              <p className="text-sm text-gray-600">Content 3</p>
            </button>
            <button 
              onClick={() => handleCardClick(4)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 4 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 4</h3>
              <p className="text-sm text-gray-600">Content 4</p>
            </button>
            <button 
              onClick={() => handleCardClick(5)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 5 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 5</h3>
              <p className="text-sm text-gray-600">Content 5</p>
            </button>
            <button 
              onClick={() => handleCardClick(6)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 6 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 6</h3>
              <p className="text-sm text-gray-600">Content 6</p>
            </button>
            <button 
              onClick={() => handleCardClick(7)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 7 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 7</h3>
              <p className="text-sm text-gray-600">Content 7</p>
            </button>
            <button 
              onClick={() => handleCardClick(8)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 8 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 8</h3>
              <p className="text-sm text-gray-600">Content 8</p>
            </button>
            <button 
              onClick={() => handleCardClick(9)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 9 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 9</h3>
              <p className="text-sm text-gray-600">Content 9</p>
            </button>
            <button 
              onClick={() => handleCardClick(10)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 10 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 10</h3>
              <p className="text-sm text-gray-600">Content 10</p>
            </button>
            <button 
              onClick={() => handleCardClick(11)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 11 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 11</h3>
              <p className="text-sm text-gray-600">Content 11</p>
            </button>
            <button 
              onClick={() => handleCardClick(12)}
              className={`text-left bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition-all ${selectedCard === 12 ? 'ring-2 ring-blue-500' : ''}`}>
              <h3 className="font-semibold mb-2">Card 12</h3>
              <p className="text-sm text-gray-600">Content 12</p>
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 ">
            <Datepicker inline />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseTimePage;