import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
