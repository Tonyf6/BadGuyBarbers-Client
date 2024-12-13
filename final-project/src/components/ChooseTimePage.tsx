import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import Breadcrumb from "./Breadcrumb";
import AnimatedPage from "./AnimatedPage";
import { Datepicker } from "flowbite-react";
import { CreditCard, DollarSign } from "lucide-react";
import { 
  TimeSlotSkeleton, 
  CalendarSkeleton, 
  TimeInfoCardSkeleton, 
  BreadcrumbSkeleton 
} from "./Skeleton";

interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
  duration: number;
}

interface Service {
  name: string;
  duration: string;
  price: number;
}

interface LocationState {
  barber: {
    name: string;
    availability: string;
    image: string;
  };
  services: Service[];
  total: number;
}

const ChooseTimePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { barber, services, total } = (location.state as LocationState) || {};

  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isBooking, setIsBooking] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      setIsInitialLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setTimeSlots(generateTimeSlots());
      } finally {
        setIsInitialLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    if (selectedDate && !isInitialLoading) {
      setTimeSlots(generateTimeSlots());
    }
  }, [selectedDate]);

  const handleCardClick = (slot: TimeSlot) => {
    setSelectedCard(slot.id);
    setSelectedSlot(slot);
  };

  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const startTime = new Date();
    startTime.setHours(9, 0, 0);
    const endTime = new Date();
    endTime.setHours(18, 0, 0);
    let id = 1;

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

  const submitBooking = async () => {
    if (selectedDate && selectedSlot && selectedMethod) {
      setIsBooking(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        navigate('/confirmation', {
          state: {
            barber,
            services,
            total,
            date: selectedDate,
            time: selectedSlot.time,
            paymentMethod: selectedMethod
          }
        });
      } catch (error) {
        console.error("Booking failed:", error);
      } finally {
        setIsBooking(false);
        setShowPopup(false);
      }
    }
  };

  const renderTimeSlot = (slot: TimeSlot) => {
    const isSelected = selectedCard === slot.id;
    const isUnavailable = !slot.available;

    return (
      <button
        key={slot.id}
        onClick={() => slot.available && handleCardClick(slot)}
        disabled={isUnavailable}
        className={`
          text-center rounded-2xl p-4 transition-all duration-200 ease-in-out
          ${isUnavailable 
            ? 'bg-gray-200 cursor-not-allowed' 
            : isSelected
              ? 'bg-black shadow-lg transform scale-[1.02]'
              : 'bg-white hover:shadow-md hover:scale-[1.01]'
          }
          relative
        `}
      >
        <h3 className={`
          text-base font-medium transition-colors
          ${isSelected 
            ? 'text-white' 
            : isUnavailable
              ? 'text-gray-400'
              : 'text-gray-900'
          }
        `}>
          {slot.time.split(' ')[0]}
        </h3>
        <p className={`
          text-sm transition-colors
          ${isSelected
            ? 'text-white'
            : isUnavailable
              ? 'text-gray-400'
              : 'text-gray-500'
          }
        `}>
          {slot.available ? '30 min' : 'Unavailable'}
        </p>
      </button>
    );
  };

  const renderInfoCard = () => (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-1">Your order</h2>
      <p className="text-sm text-gray-400 mb-6">Bad Guy Barbers</p>
      
      <div className="flex items-center gap-3 mb-6">
        <img
          src={barber?.image}
          alt={barber?.name}
          className="w-8 h-8 rounded-sm object-cover"
        />
        <span className="text-gray-900">{barber?.name}</span>
      </div>

      <div className="space-y-4">
        {services?.map((service, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <p className="text-gray-900">
                {index === 0 ? service.name : `+ ${service.name}`}
              </p>
              <p className="text-sm text-gray-500">{service.duration}</p>
            </div>
            <p className="text-gray-900">${service.price}</p>
          </div>
        ))}

        {selectedDate && selectedSlot && (
          <div className="py-4 border-y border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-900">Appointment</p>
                <p className="text-sm text-gray-500">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                  {" at "}
                  {selectedSlot.time}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total</span>
            <span className="font-medium">${total}</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedMethod("card")}
              className={`
                flex items-center justify-center p-3 rounded-lg border-2
                ${selectedMethod === "card" 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-200"
                }
              `}
            >
              <CreditCard 
                className={selectedMethod === "card" ? "text-blue-500" : "text-gray-400"} 
              />
            </button>
            <button
              onClick={() => setSelectedMethod("cash")}
              className={`
                flex items-center justify-center p-3 rounded-lg border-2
                ${selectedMethod === "cash" 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-gray-200"
                }
              `}
            >
              <DollarSign 
                className={selectedMethod === "cash" ? "text-blue-500" : "text-gray-400"} 
              />
            </button>
          </div>

          <button
            onClick={submitBooking}
            disabled={!selectedDate || !selectedSlot || !selectedMethod || isBooking}
            className={`
              w-full py-3 rounded-lg text-white font-medium transition-colors
              ${(!selectedDate || !selectedSlot || !selectedMethod) 
                ? "bg-gray-200 cursor-not-allowed" 
                : "bg-black hover:bg-gray-900"
              }
            `}
          >
            {isBooking ? "Booking..." : "Confirm booking"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="pt-32 px-8">
          {isInitialLoading ? <BreadcrumbSkeleton /> : <Breadcrumb />}
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex h-[calc(100vh-200px)] relative">
            <div className="flex-1 flex gap-8 pr-[400px]">
              {/* Time slots grid */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6">Choose a time</h2>
                {isInitialLoading ? (
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(12)].map((_, index) => (
                      <TimeSlotSkeleton key={index} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    {timeSlots.map((slot) => renderTimeSlot(slot))}
                  </div>
                )}
              </div>

              {/* Calendar section */}
              <div className="w-[400px]">
                {isInitialLoading ? (
                  <CalendarSkeleton />
                ) : (
                  <Datepicker
                    inline
                    onChange={(date) => setSelectedDate(date as Date)}
                  />
                )}
              </div>
            </div>

            {/* Info card - fixed width sidebar */}
            <div className="fixed top-32 right-8 w-[380px] bg-white rounded-xl shadow-sm h-[calc(100vh-200px)] overflow-y-auto">
              {isInitialLoading ? (
                <TimeInfoCardSkeleton />
              ) : (
                renderInfoCard()
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden min-h-screen flex flex-col items-center p-4">
            {isInitialLoading ? (
              <>
                <CalendarSkeleton />
                <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-6">
                  {[...Array(9)].map((_, index) => (
                    <TimeSlotSkeleton key={index} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="w-full max-w-md mb-4">
                  <Datepicker
                    inline
                    onChange={(date) => setSelectedDate(date as Date)}
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                  {timeSlots.map((slot) => renderTimeSlot(slot))}
                </div>

                <button
                  onClick={() => setShowPopup(true)}
                  disabled={!selectedDate || !selectedSlot}
                  className={`
                    w-full max-w-md bg-black text-white py-3 rounded-lg mt-6
                    ${(!selectedDate || !selectedSlot) ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  Continue
                </button>
              </>
            )}

            {/* Mobile Popup */}
            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
                  <button
                    className="absolute top-4 right-4 text-gray-500"
                    onClick={() => setShowPopup(false)}
                  >
                    ✕
                  </button>
                  {renderInfoCard()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ChooseTimePage;