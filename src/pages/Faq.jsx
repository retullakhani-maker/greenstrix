import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Faq() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | GREENSTRIX - Packaging Experts EU"
        description="Answers to common questions about PET/PP strapping, stretch film, and export logistics for the German and European markets. EU compliance and delivery insights."
        canonical="https://greenstrix.com/faq"
        keywords="packaging FAQ Germany, strapping export questions EU, stretch film technical specs Europe, delivery to Germany packaging"
      />

      {/* Page Header */}
      <div
        className="container-fluid page-hero faq-hero"
        style={{ backgroundImage: "url('/img/faq-section.webp')" }}
      >
        <div className="container">
          <div className="page-hero-content animated slideInLeft">
            <h1 className="page-hero-title">FAQs</h1>
            <p className="page-hero-subtitle">
              Have questions? Find quick answers about our packaging products, technical specs, and global delivery
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="faq-native section-padding">
        <div className="container py-5">
          <div className="section-title text-center mb-5">
            <h5 className="fw-bold text-primary text-uppercase">Common Inquiries</h5>
            <h1 className="mb-0">Frequently Asked Questions</h1>
            <p className="subtitle mt-3">PET Strap, PP Strap &amp; Stretch Film Exporter Insights</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* General Information */}
              <div className="faq-category mb-5">
                <h3 className="mb-4 text-primary">
                  <i className="fa fa-info-circle me-2"></i>General Information
                </h3>
                <div className="faq-list">
                  <details className="faq-item">
                    <summary className="fw-bold">
                      Are you a manufacturer or an exporter?
                      <span className="faq-arrow"></span>
                    </summary>
                    <div className="faq-content text-muted">
                      GREENSTRIX is an international export specialist. We source premium packaging materials,
                      coordinate quality assurance, and manage complex global logistics to deliver products that meet
                      exact buyer specifications.
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="fw-bold">
                      Which products do you specialize in?
                      <span className="faq-arrow"></span>
                    </summary>
                    <div className="faq-content text-muted">
                      We specialize in high-performance industrial packaging, specifically PET strapping, high-tensile
                      PP strapping, and LLDPE stretch films designed for maximum load stability.
                    </div>
                  </details>
                </div>
              </div>

              {/* Logistics & Support */}
              <div className="faq-category mb-5">
                <h3 className="mb-4 text-primary">
                  <i className="fa fa-ship me-2"></i>Logistics &amp; Support
                </h3>
                <div className="faq-list">
                  <details className="faq-item">
                    <summary className="fw-bold">
                      Which international markets do you serve?
                      <span className="faq-arrow"></span>
                    </summary>
                    <div className="faq-content text-muted">
                      While we have a strong presence in European and Middle Eastern markets, we are equipped to supply
                      industrial packaging solutions to buyers worldwide, ensuring compliance with local import
                      standards.
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="fw-bold">
                      Do you provide samples for technical evaluation?
                      <span className="faq-arrow"></span>
                    </summary>
                    <div className="faq-content text-muted">
                      Yes, technical samples for PET/PP straps and stretch film can be arranged for quality testing and
                      evaluation before proceeding with bulk export orders.
                    </div>
                  </details>
                </div>
              </div>

              {/* Quality & Responsibility */}
              <div className="faq-category mb-2">
                <h3 className="mb-4 text-primary">
                  <i className="fa fa-check-circle me-2"></i>Quality &amp; Responsibility
                </h3>
                <div className="faq-list">
                  <details className="faq-item">
                    <summary className="fw-bold">
                      Are your products compliant with European standards?
                      <span className="faq-arrow"></span>
                    </summary>
                    <div className="faq-content text-muted">
                      Our products can be sourced to meet specific international technical requirements. We can arrange
                      for third-party inspections and provide necessary export certifications to ensure full compliance.
                    </div>
                  </details>
                  <details className="faq-item">
                    <summary className="fw-bold">
                      Do you offer sustainable or recycled packaging options?
                      <span className="faq-arrow"></span>
                    </summary>
                    <div className="faq-content text-muted">
                      Yes, we actively promote sustainability by offering rPET (recycled PET) strapping options and
                      100% recyclable packaging materials to support a circular economy.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <p className="lead">Didn't find the answer you were looking for?</p>
            <Link to="/contact" className="btn btn-brand px-5 py-3">Submit a Custom Inquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
