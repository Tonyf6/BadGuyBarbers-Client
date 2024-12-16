
import axios from 'axios';
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

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  




