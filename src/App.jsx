import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Sustainability from './pages/Sustainability'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import PetStrapping from './pages/PetStrapping'
import PpStrapping from './pages/PpStrapping'
import StretchFilm from './pages/StretchFilm'
import ShrinkRoll from './pages/ShrinkRoll'
import GiWireBuckle from './pages/GiWireBuckle'
import CordStrap from './pages/CordStrap'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/pet-strapping" element={<PetStrapping />} />
        <Route path="/products/pp-strapping" element={<PpStrapping />} />
        <Route path="/products/stretch-film" element={<StretchFilm />} />
        <Route path="/products/shrink-roll" element={<ShrinkRoll />} />
        <Route path="/products/gi-wire-buckle" element={<GiWireBuckle />} />
        <Route path="/products/cord-strap" element={<CordStrap />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </>
  )
}
