import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main />}></Route>
          {/* <Route path='/booking' element></Route> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
