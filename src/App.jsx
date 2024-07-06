// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { FavoriteProvider } from './contexts/FavoriteContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PacPage from './pages/PacPage'

function App() {
  return (
    <ShoppingCartProvider>
      <FavoriteProvider>
        <Router>
          <Header />
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pacs" element={<PacPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </FavoriteProvider>
    </ShoppingCartProvider>
  )
}

export default App
