import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Datepicker } from "flowbite-react";
import { CreditCard, DollarSign } from "lucide-react";
import tagimg from "../assets/man silhouette.jpg";
// Mock API for bookings
const mockBookingApi = {
  async post(url: string, data: any) {
    console.log("Booking submitted:", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: {
            message: "Booking successful",
            bookingId: Math.floor(Math.random() * 1000),
          },
        });
      }, 1000);
    });
  },
};

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
  duration: number;
}

const ChooseTimePage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleCardClick = (slot: TimeSlot) => {
    setSelectedCard(slot.id);
    setSelectedSlot(slot);
  };

  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startTime = new Date();
    startTime.setHours(9, 0, 0);
    const endTime = new Date();
    endTime.setHours(19, 0, 0);
    let id = 1;

    // Add some randomness to availability
    const unavailableSlots = new Set([3, 7, 12, 15]);

    while (startTime < endTime) {
      const timeString = startTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      slots.push({
        id: id,
        time: timeString,
        available: !unavailableSlots.has(id),
        duration: 30,
      });

      startTime.setMinutes(startTime.getMinutes() + 30);
      id++;
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const combineDateAndTime = (date: Date, time: string): string => {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":").map(Number);

    if (modifier === "PM" && hours < 24) hours += 24;
    if (modifier === "AM" && hours === 24) hours = 0;

    date.setHours(hours, minutes, 0, 0);
    return date.toISOString();
  };

  const submitBooking = async () => {
    if (selectedDate && selectedSlot) {
      try {
        setIsBooking(true);
        const combinedDateTime = combineDateAndTime(
          selectedDate,
          selectedSlot.time
        );
        await mockBookingApi.post("/api/bookings", {
          datetime: combinedDateTime,
          duration: selectedSlot.duration,
        });
        setBookingSuccess(true);
        console.log("Booking successfully submitted");
      } catch (error) {
        console.error("Failed to submit booking", error);
        setBookingSuccess(false);
      } finally {
        setIsBooking(false);
      }
    } else {
      console.error("No date or time slot selected");
    }
  };

  return (
    <div className="flex">
      <NavBar />
      <div className="flex-grow">
        {/* Desktop Layout */}
        <div className="hidden lg:block min-h-screen flex justify-start items-center pt-20 pl-20">
          <div className="flex flex-row gap-8 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => slot.available && handleCardClick(slot)}
                  disabled={!slot.available}
                  className={`text-left rounded-lg shadow-md p-4 hover:shadow-lg transition-all
                    ${selectedCard === slot.id ? "ring-2 ring-blue-500" : ""}
                    ${
                      !slot.available
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gray-100"
                    }`}
                >
                  <h3 className="font-semibold mb-2">{slot.time}</h3>
                  <p className="text-sm text-gray-600">
                    {slot.available ? `${slot.duration} min` : "Unavailable"}
                  </p>
                </button>
              ))}
            </div>
            {/* This div above is marked  */}
            <div className=" rounded-lg p-4">
              <Datepicker
                inline
                onChange={(date) => setSelectedDate(date as Date)}
              />
            </div>
          </div>
          <div className="info-card bg-white rounded-lg shadow p-4 right-0 ml-auto mr-20 absolute top-28">
            <h2 className="text-xl font-bold mb-4 font-jacques">
              Bad Guy Barbers
            </h2>
            <div className="info-content">
              {selectedDate && (
                <p>
                  <strong>Selected Date:</strong>{" "}
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              {selectedSlot ? (
                <div>
                  <p>
                    <strong>Selected Time:</strong> {selectedSlot.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {selectedSlot.duration} minutes
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">No time slot selected</p>
              )}

              <div className="flex flex-col space-y-2 p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedMethod("card")}
                    className={`
            flex items-center justify-center 
            w-12 h-8 
            border-2 rounded-lg 
            transition-all duration-200 
            ${
              selectedMethod === "card"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-500"
            }
          `}
                  >
                    <CreditCard
                      className={`
              w-4 h-4 
              ${selectedMethod === "card" ? "text-blue-600" : "text-gray-400"}
            `}
                    />
                  </button>
                  <p className="text-sm text-gray-700">Card</p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedMethod("cash")}
                    className={`
            flex items-center justify-center 
            w-12 h-8 
            border-2 rounded-lg 
            transition-all duration-200 
            ${
              selectedMethod === "cash"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-500"
            }
          `}
                  >
                    <DollarSign
                      className={`
              w-4 h-4 
              ${selectedMethod === "cash" ? "text-blue-600" : "text-gray-400"}
            `}
                    />
                  </button>
                  <p className="text-sm text-gray-700">Cash</p>
                </div>
              </div>
            </div>
            <button
              className={`mt-4 text-white rounded-lg py-2 px-6 ${
                selectedDate && selectedSlot
                  ? "bg-black hover:bg-black"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={submitBooking}
              disabled={!selectedDate || !selectedSlot || isBooking}
            >
              {isBooking ? "Booking..." : "Confirm Booking"}
            </button>
            {bookingSuccess && (
              <p className="text-green-500 mt-2">Booking successful!</p>
            )}
          </div>
          {/* </div> */}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden min-h-screen flex flex-col items-center p-4 pt-20 pl-20 ">
          {/* Datepicker */}
          {/* <div className="w-full max-w-md mb-4 mx-auto flex justify-center">
            <Datepicker
              inline
              onChange={(date) => setSelectedDate(date as Date)}
            />
          </div> */}

          {/* Time Slots */}
          <div className="lg:hidden min-h-screen flex flex-col items-center p-4 pt-20">
            {/* Datepicker */}
            <div className="w-full max-w-md mb-4 mx-auto flex justify-center">
              <Datepicker inline />
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto justify-center items-center">
              {/* Replace `timeSlots` with actual slot data */}
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  className={`text-center rounded-lg shadow-md p-2 hover:shadow-lg transition-all
              ${
                !slot.available
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-100"
              }`}
                >
                  <h3 className="font-semibold text-sm">{slot.time}</h3>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <p></p>
                <span className="font-medium">$</span>
              </div>
            </div>

            {/* "Book Time" Button */}
            <button
              className="w-full bg-black text-white py-3 rounded-lg mt-4"
              onClick={() => setShowPopup(true)} // Show pop-up
            >
              Book Time
            </button>

            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-black w-11/12 max-w-sm p-6 rounded-lg relative h-3/4 overflow-y-auto">
                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                    onClick={() => setShowPopup(false)} // Close pop-up
                  >
                    ✖
                  </button>
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Your Order
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4">
                      <img
                        src={tagimg}
                        alt="Person Icon"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white">Something</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-white">Order Here</p>
                    <p className="text-white">Date and Time</p>
                  </div>
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <CreditCard
                      className={`
      w-6 h-6
      ${selectedMethod === "card" ? "text-blue-600" : "text-gray-400"}
    `}
                    />
                    <DollarSign
                      className={`
      w-6 h-6
      ${selectedMethod === "cash" ? "text-blue-600" : "text-gray-400"}
    `}
                    />
                  </div>
                  <button
                    className="absolute bottom-0 left-0 w-full bg-white text-black py-2"
                    onClick={() => setShowPopup(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default ChooseTimePage;
