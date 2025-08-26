import { useState } from "react";

export default function Booking() {
   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your table for ${formData.guests} person(s) on ${formData.date} at ${formData.time} has been reserved. A confirmation email will be sent to ${formData.email}.`);
        setFormData({
            name: "",
            email: "",
            date: "",
            time: "",
            guests: 1,
            occasion: ""
        });
    };

    return (
        <div className="booking row">
            <h1 className="booking-title">Book a Table</h1>
            <form className="booking-form">
                <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date"  value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />

            <label htmlFor="time">Time:</label>
            <select id="time" name="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} required>
                <option defaultValue="" >Select Time</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} required />

            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}>
                <option defaultValue="" >Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business</option>
            </select>

            <button onClick={handleSubmit} type="submit">Make Your Reservation</button>
        </form>
    </div>
  )
}
