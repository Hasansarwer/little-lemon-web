import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import ConfirmedBooking from './components/ConfirmedBooking'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Booking from './components/BookingForm'
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
    
    

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main />}></Route>
          <Route path='/booking' element = {<Booking bookingData={bookingData} setBookingData={setBookingData} />}></Route>        
          <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
