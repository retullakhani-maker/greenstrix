import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const navbarRef = useRef(null)
  const collapseRef = useRef(null)

  useEffect(() => {
    const navbar = navbarRef.current
    if (!navbar) return
    const handleScroll = () => {
      if (window.scrollY > 45) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path
  const isProductActive = () => location.pathname.startsWith('/products/')

  const closeNavbar = () => {
    // Use Bootstrap's collapse API
    const collapseEl = document.getElementById('navbarCollapse')
    if (collapseEl && collapseEl.classList.contains('show')) {
      if (window.bootstrap && window.bootstrap.Collapse) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl)
        if (bsCollapse) bsCollapse.hide()
      }
    }
  }

  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container-fluid px-lg-5 px-3">
        <Link to="/" className="navbar-brand" onClick={closeNavbar}>
          <img src="/img/greenstrix-header-background.webp" alt="GREENSTRIX Logo" className="logo-img" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse" ref={collapseRef}>
          <ul className="navbar-nav ms-auto py-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`} onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`} onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle${isProductActive() ? ' active' : ''}`}
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu border-0 shadow" aria-labelledby="navbarDropdown">
                <li>
                  <Link className={`dropdown-item${isActive('/products/pet-strapping') ? ' active' : ''}`} to="/products/pet-strapping" onClick={closeNavbar}>
                    PET Strapping Band
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item${isActive('/products/pp-strapping') ? ' active' : ''}`} to="/products/pp-strapping" onClick={closeNavbar}>
                    PP Strapping Band
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item${isActive('/products/stretch-film') ? ' active' : ''}`} to="/products/stretch-film" onClick={closeNavbar}>
                    LLDPE Stretch Film
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item${isActive('/products/shrink-roll') ? ' active' : ''}`} to="/products/shrink-roll" onClick={closeNavbar}>
                    Shrink Roll
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item${isActive('/products/gi-wire-buckle') ? ' active' : ''}`} to="/products/gi-wire-buckle" onClick={closeNavbar}>
                    GI Wire Buckle
                  </Link>
                </li>
                <li>
                  <Link className={`dropdown-item${isActive('/products/cord-strap') ? ' active' : ''}`} to="/products/cord-strap" onClick={closeNavbar}>
                    Composite Cord Strap
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link${isActive('/services') ? ' active' : ''}`} onClick={closeNavbar}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sustainability" className={`nav-link${isActive('/sustainability') ? ' active' : ''}`} onClick={closeNavbar}>
                Sustainability
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className={`nav-link${isActive('/faq') ? ' active' : ''}`} onClick={closeNavbar}>
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`} onClick={closeNavbar}>
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/contact" className="btn btn-brand ms-3" onClick={closeNavbar}>
            GET A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  )
}
