import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4 col-md-6">
            <div className="footer-about">
              <Link to="/" className="footer-brand">
                <img src="/img/greenstrix-logo.webp" alt="GREENSTRIX Logo" className="footer-logo" />
              </Link>
              <p className="mt-4 text-light-gray">
                GREENSTRIX is a Premium Exporter Of Eco-Friendly Packaging Solutions. Committed To
                Sustainability And Quality Excellence.
              </p>
              <div className="footer-certifications d-flex align-items-center gap-3 mt-4">
                <img src="/img/greenstrix-iso.png" alt="ISO Logo" className="cert-logo" />
                <img src="/img/greenstrix-duns.png" alt="DUNS Logo" className="cert-logo" />
                <img src="/img/greenstrix-dgft.avif" alt="DGFT Logo" className="cert-logo" />
                <img src="/img/greenstrix-plasric-export.webp" alt="Plastic Export Logo" className="cert-logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Quick Links</h4>
              <ul className="footer-links list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products/pet-strapping">Our Products</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/sustainability">Sustainability</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4 className="widget-title">Get In Touch</h4>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa fa-map-marker-alt"></i></div>
                <div className="contact-text">
                  <p>701, SNS Platina Near Someshwara Enclave, Vesu, Surat-395 007</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa fa-phone-alt"></i></div>
                <div className="contact-text">
                  <p>
                    <a href="https://wa.me/919090603966" target="_blank" rel="noopener noreferrer">(+91) 9090603966</a><br />
                    <a href="https://wa.me/4917685614141" target="_blank" rel="noopener noreferrer">(+49) 176 85614141</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa fa-envelope"></i></div>
                <div className="contact-text">
                  <p><a href="mailto:sales@greenstrix.com">sales@greenstrix.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fab fa-linkedin-in"></i></div>
                <div className="contact-text">
                  <p>
                    <a
                      href="https://www.linkedin.com/company/greenstrix/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @GreenStrix
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-auto text-center">
              <p className="copyright mb-0">&copy; 2026 GREENSTRIX. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
