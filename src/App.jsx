import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booking from './components/Booking'
import { useState } from 'react'

function App() {
  const [bookingData, setBookingData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        occasion: ""
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${bookingData.name}! Your table for ${bookingData.guests} person(s) on ${bookingData.date} at ${bookingData.time} has been reserved. A confirmation email will be sent to ${bookingData.email}.`);
        setBookingData({
            name: "",
            email: "",
            date: "",
            time: "",
            guests: 1,
            occasion: ""
        });
    };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main />}></Route>
          <Route path='/booking' element = {<Booking bookingData={bookingData} handleSubmit={handleSubmit} setBookingData={setBookingData} />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
