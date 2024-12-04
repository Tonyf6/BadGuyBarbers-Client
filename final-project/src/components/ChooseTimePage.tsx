

import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Datepicker } from "flowbite-react";

// Mock API for bookings
const mockBookingApi = {
  async post(url: string, data: any) {
    console.log('Booking submitted:', data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: {
            message: 'Booking successful',
            bookingId: Math.floor(Math.random() * 1000)
          }
        });
      }, 1000);
    });
  }
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

    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    date.setHours(hours, minutes, 0, 0);
    return date.toISOString();
  };

  const submitBooking = async () => {
    if (selectedDate && selectedSlot) {
      try {
        setIsBooking(true);
        const combinedDateTime = combineDateAndTime(selectedDate, selectedSlot.time);
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
                    ${!slot.available ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-100"}`}
                >
                  <h3 className="font-semibold mb-2">{slot.time}</h3>
                  <p className="text-sm text-gray-600">
                    {slot.available ? `${slot.duration} min` : "Unavailable"}
                  </p>
                </button>
              ))}
            </div>
            <div className=" rounded-lg p-4">
              <Datepicker
                inline
                onChange={(date) => setSelectedDate(date as Date)}
              />
            </div>
            <div className="info-card bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold mb-4">Bad Guy Barbers</h2>
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
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden min-h-screen flex flex-col items-center p-4 pt-20 pl-20">
          {/* Datepicker */}
          <div className="w-full max-w-md mb-4 mx-auto flex justify-center">
            <Datepicker
              inline
              onChange={(date) => setSelectedDate(date as Date)}
            />
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md mx-auto">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.available && handleCardClick(slot)}
                disabled={!slot.available}
                className={`text-center rounded-lg shadow-md p-2 hover:shadow-lg transition-all
                  ${selectedCard === slot.id ? "ring-2 ring-blue-500" : ""}
                  ${!slot.available ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-100"}`}
              >
                <h3 className="font-semibold text-sm">{slot.time}</h3>
              </button>
            ))}
          </div>
          <div className="info-card max-sm:hidden bg-white rounded-lg shadow-md p-4 mt-4 w-full max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Bad Guy Barbers</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ChooseTimePage;