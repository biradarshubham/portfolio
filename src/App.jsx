import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './body/AboutUs'
import Contact from './body/Contact'
import Footer from './body/Footer'
import Home from './body/Home'
import Service from './body/Service'
import Work from './body/Work'
import NavBar from './navbar/NavBar'

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/service"element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
