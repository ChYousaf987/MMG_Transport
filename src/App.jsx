import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ServiceDetail from './compounent/serviceDetail'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App