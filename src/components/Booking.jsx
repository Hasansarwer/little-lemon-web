import React from 'react'

export default function Booking({ bookingData, handleSubmit, setBookingData }) {
    const onSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        handleSubmit(e);
    };
    

    return (
        <div className="booking row">
            <h1 className="booking-title">Book a Table</h1>
            <form className="booking-form" onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" value={bookingData.name} onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" value={bookingData.email} onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date"  value={bookingData.date} onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })} required />

            <label htmlFor="time">Time:</label>
            <select id="time" name="time" value={bookingData.time} onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })} required>
                <option value="" >Select Time</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" value={bookingData.guests} onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })} required />

            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion" value={bookingData.occasion} onChange={(e) => setBookingData({ ...bookingData, occasion: e.target.value })}>
                <option value="" >Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business</option>
            </select>

            <button type="submit">Make Your Reservation</button>
        </form>
    </div>
  )
}
