import React from 'react'
import { useLocation } from 'react-router-dom';

export default function ConfirmedBooking() {
    const bookingData = useLocation().state;
  return (
    <div className='confirmed-booking'>
        <h2 className='row'>Your Booking is Confirmed!</h2>
        <p>Details:</p>
        <ul>
            <li>Name: {bookingData.name}</li>
            <li>Email: {bookingData.email}</li>
            <li>Date: {bookingData.date}</li>
            <li>Time: {bookingData.time}</li>
            <li>Guests: {bookingData.guests}</li>
            <li>Occasion: {bookingData.occasion}</li>
        </ul>
    </div>
  )
}
