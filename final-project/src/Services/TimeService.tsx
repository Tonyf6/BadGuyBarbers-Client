
import { BASE_URL } from '../constant';

// Interfaces
export interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
  duration: number;
}

export interface BookingRequest {
  datetime: string;
  duration: number;
  paymentMethod: 'card' | 'cash';
}

export interface BookingResponse {
  bookingId: number;
  message: string;
  status: 'success' | 'error';
}

export interface AvailabilityRequest {
  date: string;
}

export interface AvailabilityResponse {
  availableSlots: TimeSlot[];
}

let userData = {};


// const createBooking = async(createdBook) => {
    
//     const result = await fetch(BASE_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(createdBook)
//     })
//     if(!result.ok)
//     {
//         const message = `Yo! You have an error! Check your code ${result.status}`
//         throw new Error(message);

//     }
//     let data = await result.json();
//     console.log(data);
// }





