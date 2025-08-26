import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Booking from './components/Booking'

function App() {
 

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main />}></Route>
          <Route path='/booking' element = {<Booking />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
