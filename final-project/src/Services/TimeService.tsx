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

// Booking Service
class BookingService {
  // Base URL for your API - replace with your actual backend URL
  private baseURL = BASE_URL;

  // Fetch available time slots for a specific date
  async checkAvailability(request: AvailabilityRequest): Promise<AvailabilityResponse> {
    try {
      const response = await axios.get<AvailabilityResponse>(`${this.baseURL}/availability`, {
        params: { date: request.date }
      });
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error checking availability');
      return { availableSlots: [] };
    }
  }

  // Book a time slot
  async createBooking(request: BookingRequest): Promise<BookingResponse> {
    try {
      const response = await axios.post<BookingResponse>(`${this.baseURL}/bookings`, request);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error creating booking');
      return {
        bookingId: 0,
        message: 'Booking failed',
        status: 'error'
      };
    }
  }

  // Cancel an existing booking
  async cancelBooking(bookingId: number): Promise<boolean> {
    try {
      await axios.delete(`${this.baseURL}/bookings/${bookingId}`);
      return true;
    } catch (error) {
      this.handleError(error, 'Error canceling booking');
      return false;
    }
  }

  // Retrieve a specific booking
  async getBooking(bookingId: number): Promise<BookingResponse | null> {
    try {
      const response = await axios.get<BookingResponse>(`${this.baseURL}/bookings/${bookingId}`);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Error retrieving booking');
      return null;
    }
  }

  // Private error handling method
  private handleError(error: any, message: string): void {
    if (axios.isAxiosError(error)) {
      console.error(message, {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    } else {
      console.error(message, error);
    }
  }
}

// Export a singleton instance
export const bookingService = new BookingService();