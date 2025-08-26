import React, { useEffect, useMemo, useState } from 'react'
import { fetchAPI, submitAPI } from '../lib/api'
import { useNavigate } from 'react-router-dom';

export default function BookingForm({ bookingData, setBookingData }) {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [loadingTimes, setLoadingTimes] = useState(false);
    const [timesError, setTimesError] = useState("");
    const navigate = useNavigate();

    const todayStr = useMemo(() => {
        const d = new Date();
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const dd = String(d.getDate()).padStart(2, "0");
        return `${d.getFullYear()}-${mm}-${dd}`;
    }, []);

    

    const isFormValid = () => {
        return (
            bookingData.name.trim() !== "" &&
            bookingData.email.trim() !== "" &&
            bookingData.date.trim() !== "" &&
            bookingData.time.trim() !== "" &&
            bookingData.guests > 0 &&
            bookingData.occasion.trim() !== ""
        );
    };
    const onSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (!submitAPI(bookingData)) {
            alert("Failed to submit booking. Please try again.");
            return;
        }
        navigate("/confirmed-booking", { state: bookingData });
    };
    const date = new Date();

    useEffect(() => {
        if (!bookingData.date) {
        setAvailableTimes([]);
        return;
        }
        let ignore = false;
        (async () => {
        try {
            setLoadingTimes(true);
            setTimesError("");
            const dateObj = new Date(bookingData.date);
            const times = await fetchAPI(dateObj); // must return e.g. ["17:00","18:00", ...]
            if (!ignore) setAvailableTimes(Array.isArray(times) ? times : []);
        } catch (err) {
            console.error(err);
            if (!ignore) {
            setAvailableTimes([]);
            setTimesError("Couldn’t load times. Please pick another date.");
            }
        } finally {
            if (!ignore) setLoadingTimes(false);
        }
        })();
        return () => { ignore = true;  // ignore any results after this
        };
    }, [bookingData.date]);

     // When date changes, clear previously chosen time
    const setDate = (value) => {
        setBookingData({ ...bookingData, date: value, time: "" });
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
            <input type="date" id="date" name="date"  value={bookingData.date} onChange={(e) => setDate(e.target.value)} required />

            <label htmlFor="time">Time:</label>
            <select
            id="time"
            value={bookingData.time}
            onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
            required
            disabled={!bookingData.date || loadingTimes || !!timesError || availableTimes.length === 0}
            >
            <option value="">{loadingTimes ? "Loading..." : "Select Time"}</option>
            {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
            ))}
            </select>
            {timesError && <small className="field-error">{timesError}</small>}

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" value={bookingData.guests} onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })} required />

            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" name="occasion" value={bookingData.occasion} onChange={(e) => setBookingData({ ...bookingData, occasion: e.target.value })} required>
                <option value="" >Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business</option>
            </select>

            <button disabled={!isFormValid()} type="submit">Make Your Reservation</button>
        </form>
    </div>
  )
}
