import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | GREENSTRIX - Germany & Global Packaging Support"
        description="Get in touch with GREENSTRIX for premium packaging solutions. Dedicated sales office in Germany. Request a quote for PET/PP strapping and stretch film today."
        canonical="https://greenstrix.com/contact"
        keywords="contact Greenstrix Germany, packaging quote Europe, industrial strapping supplier Germany, packaging office Germany, (+49) 176 85614141"
      />

      {/* Page Header */}
      <div
        className="container-fluid page-hero"
        style={{ backgroundImage: "url('/img/contact-section-new.webp')" }}
      >
        <div className="container">
          <div className="page-hero-content animated slideInLeft">
            <h1 className="page-hero-title">Contact Us</h1>
            <p className="page-hero-subtitle">
              Get in touch with our experts for a custom quote or technical advice on your specific packaging
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section-padding contact-section-premium">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h5>Get In Touch</h5>
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Contact GREENSTRIX Today To Discover How Our Premium PET And PP Strapping And Stretch film Solutions Can
              Strengthen Your Supply Chain.
            </p>
          </div>

          <div className="contact-card-wrapper">
            <div className="row g-0">
              {/* Contact Info Panel */}
              <div className="col-lg-5">
                <div className="contact-info-panel">
                  <h3 className="text-white mb-4">Direct Contact</h3>
                  <p className="mb-5 text-light-gray text-white">
                    Preferred communication channels for immediate support and business inquiries.
                  </p>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-user-tie"></i></div>
                    <div className="contact-info-text text-white">
                      <h5 className="text-white">Raajesh Kukadiya</h5>
                      <p className="text-white">Export &amp; Business Development Executive</p>
                      <b>
                        <a href="https://wa.me/919090603966" target="_blank" rel="noopener noreferrer" className="text-white">
                          (+91) 9090603966
                        </a>
                      </b>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-user-tie"></i></div>
                    <div className="contact-info-text text-white">
                      <h5 className="text-white">Jaimin Patel</h5>
                      <p className="text-white">Sales &amp; Partnerships Coordinator</p>
                      <b>
                        <a href="https://wa.me/4917685614141" target="_blank" rel="noopener noreferrer" className="text-white">
                          (+49) 176 85614141
                        </a>
                      </b>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-envelope"></i></div>
                    <div className="contact-info-text text-white">
                      <h5 className="text-white">Email Us</h5>
                      <p>
                        <a href="mailto:sales@greenstrix.com" className="text-white">
                          sales@greenstrix.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-map-marker-alt"></i></div>
                    <div className="contact-info-text text-white">
                      <h5 className="text-white">Our Office</h5>
                      <p className="text-white">701, SNS Platina Near Someshwara Enclave, Vesu, Surat-395 007</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Panel */}
              <div className="col-lg-7">
                <div className="contact-form-panel">
                  <h3 className="fw-bold mb-4">Request a Personalized Quote</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm overflow-hidden rounded-4">
                <iframe
                  src="https://www.google.com/maps?q=701,%20SNS%20Platina,%20Near%20Someshwara%20Enclave,%20Vesu,%20Surat,%20Gujarat%20395007&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  title="Greenstrix Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
