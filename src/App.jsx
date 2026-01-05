import { useState } from 'react'
import Header from './components/Header'
import Home from './page/Home'
import Portfolio from './page/Protfolio'
import Service from './page/Service'
import Journal from './page/Journal'
import Inquiry from './page/Inquiry'
import Detailspace from './page/Detailspace'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
 

  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/:id" element={<Detailspace />} />
            <Route  path="/portfolio" element={<Portfolio />} />
            <Route  path="/service" element={<Service />} />
            <Route  path="/journal" element={<Journal />} />
            <Route  path="/inquiry" element={<Inquiry />} />
        </Routes>
       <Footer />
    </BrowserRouter>
    
  )
}

export default App
