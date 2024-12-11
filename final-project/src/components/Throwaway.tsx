import React, { useState } from 'react';

function YourOrderModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-6 w-full max-w-sm h-screen/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Order</h2>
          <button className="text-gray-400 hover:text-gray-700" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center mb-4">
          <img src="user_avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold">Tony F.</p>
            <p className="text-gray-500">Sep 19 at 12:30 PM</p>
          </div>
          <p className="text-lg font-semibold ml-auto">$60</p>
        </div>

        <div className="space-y-2">
          <p className="text-gray-700">Haircut <span className="text-gray-500">$35</span></p>
          <p className="text-gray-700">+ Beard Groom/ Line Up <span className="text-gray-500">$25</span></p>
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-lg font-semibold">Subtotal</p>
          <p className="text-lg font-semibold">$60</p>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg mt-4">Confirm Booking</button>
      </div>
    </div>
  );
}

export default YourOrderModal;