import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Us | GREENSTRIX - Sustainable Packaging Solutions for Europe"
        description="Learn more about GREENSTRIX, a leading global exporter of high-strength PET and PP strapping and stretch film to Germany and Europe. Our mission, vision, and commitment to EU sustainability standards."
        canonical="https://greenstrix.com/about"
        keywords="about Greenstrix, packaging exporter Germany, sustainable packaging Europe, industrial strapping supplier, EU packaging standards, German B2B packaging"
      />

      {/* Page Header */}
      <div
        className="container-fluid page-hero"
        style={{ backgroundImage: "url('/img/about-greenstrix-packaging-manufacturer-new1.webp')" }}
      >
        <div className="container">
          <div className="page-hero-content animated slideInLeft">
            <h1 className="page-hero-title">About Greenstrix</h1>
            <p className="page-hero-subtitle">
              Your Trusted Global Partner in Industrial Packaging, driving innovation and reliability in securing global
              cargo.
            </p>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">About Greenstrix</h5>
                <h1 className="mb-0">Your Trusted Global Partner in Industrial Packaging</h1>
              </div>
              <p className="mb-4">
                At GREENSTRIX, we specialize in high-strength, eco-friendly industrial packaging solutions. Based in
                Surat, India, we have established ourselves as a premier exporter of PET and PP strapping bands,
                LLDPE stretch films, Shrink Rolls, GI Wire Buckles, and Composite Cord Straps, serving diverse industries worldwide.
              </p>
              <p className="mb-4">
                With a deep understanding of packaging and load-securing applications, GREENSTRIX supports customers
                across key industries including{' '}
                <b>Logistics, Warehousing, Construction, Metals, and Manufacturing.</b> Our products are engineered to
                provide maximum strength, dimensional stability, and efficient load protection across diverse global
                operating conditions.
              </p>
              <p className="mb-4">
                We follow responsible manufacturing practices with a strong emphasis on{' '}
                <b>recyclable materials, process efficiency, and reduced material waste.</b> Through continuous process
                improvement and controlled quality protocols, GREENSTRIX aims to build long-term, dependable
                partnerships with global buyers.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Global Quality Standards
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Eco-Friendly Materials
                  </h5>
                </div>
                <div className="col-sm-6">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Expert Technical Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Reliable Supply Chain
                  </h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <a href="tel:+919090603966" style={{ textDecoration: "none" }}>
                  <div className="d-flex align-items-center">

                    <div
                      className="bg-primary d-flex align-items-center justify-content-center rounded"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>

                    <div className="ps-4">
                      <h5 className="mb-2 text-dark">Any Questions? Call us now</h5>
                      <h4 className="text-primary mb-0">(+91) 9090603966</h4>
                    </div>

                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="/img/greenstrix-about-us.webp"
                  alt="Greenstrix About Us"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Expertise */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Product Expertise</h5>
            <h1 className="mb-0">Professional Packaging Materials for Diverse Industry Needs</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fa fa-layer-group text-white"></i>
                </div>
                <h4 className="mb-3">PET Strapping Band</h4>
                <p className="m-0">
                  Engineered for heavy-duty applications, our Polyester (PET) strapping delivers high tensile strength
                  and flexibility, offering a safer alternative to steel straps.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fa fa-boxes-stacked text-white"></i>
                </div>
                <h4 className="mb-3">PP Strapping Band</h4>
                <p className="m-0">
                  Our Polypropylene (PP) strapping is versatile and reliable for light to medium cargo securing,
                  providing consistent performance across logistics sectors.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fa fa-scroll text-white"></i>
                </div>
                <h4 className="mb-3">LLDPE Stretch Film</h4>
                <p className="m-0">
                  High-performance LLDPE films designed for superior pallet stabilization, offering exceptional
                  puncture resistance and clarity for secure transit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fa fa-layer-group text-white"></i>
                </div>
                <h4 className="mb-3">Shrink Roll</h4>
                <p className="m-0">
                  Premium quality LDPE shrink films providing excellent clarity, strength, and dust protection for
                  industrial packaging applications.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fa fa-wrench text-white"></i>
                </div>
                <h4 className="mb-3">GI Wire Buckle</h4>
                <p className="m-0">
                  High-strength galvanized iron buckles designed for maximum joint efficiency with cord and woven strapping systems.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-4 h-100">
                <div className="service-icon mb-3">
                  <i className="fa fa-link text-white"></i>
                </div>
                <h4 className="mb-3">Composite Cord Strap</h4>
                <p className="m-0">
                  Polyester cord strapping providing exceptional strength and safety for heavy-duty cargo securing and international export.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Network */}
      <div className="container-fluid py-5" style={{ background: '#f8fcfd' }}>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid rounded shadow-sm" src="/img/export-quote-consultation.webp" alt="Global Supply Chain" />
            </div>
            <div className="col-lg-6">
              <div className="section-title position-relative pb-3 mb-4">
                <h5 className="fw-bold text-primary text-uppercase">Global Supply Network</h5>
                <h1 className="mb-0">Reliable Partner for Certified Quality Sourcing</h1>
              </div>
              <p className="mb-4">
                GREENSTRIX operates as a structured export hub, bridging the gap between world-class manufacturing
                units and global industrial requirements. We do not just supply materials; we manage the entire quality
                cycle from sourcing to final delivery.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Strategic partnerships with ISO-certified production
                  units.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Rigorous pre-shipment inspections and quality
                  coordination.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-3"></i>Custom-tailored specifications for unique load
                  requirements.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-3"></i>End-to-end logistics and documentation support for
                  global markets.
                </li>
              </ul>
              <p>
                Our commitment is to ensure that every pallet shipped across the border meets the exact technical and
                environmental standards expected by modern businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing Excellence */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="section-title position-relative pb-3 mb-4">
                <h5 className="fw-bold text-primary text-uppercase">Sourcing Excellence</h5>
                <h1 className="mb-0">Commitment to Global Standards &amp; Reliability</h1>
              </div>
              <p className="mb-4">
                At GREENSTRIX, we understand that industrial packaging is the backbone of global commerce. Our role as
                a leading exporter is defined by our ability to curate and supply materials that exhibit unmatched
                performance in the field.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-handshake text-primary me-2"></i>
                    <h5 className="mb-0">Partner-Driven Sourcing</h5>
                  </div>
                  <p className="small mb-0">
                    We work exclusively with certified manufacturing units that prioritize innovation and eco-friendly
                    production.
                  </p>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-shield-alt text-primary me-2"></i>
                    <h5 className="mb-0">Quality Control</h5>
                  </div>
                  <p className="small mb-0">
                    Every batch is verified for tensile strength, elongation, and puncture resistance before export.
                  </p>
                </div>
              </div>
              <p className="mb-0">
                Our expertise in international logistics ensuring that your orders are documented correctly and
                delivered efficiently, regardless of your location.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <img
                  className="img-fluid rounded shadow"
                  src="/img/about-greenstrix-packaging-manufacturer-new.webp"
                  alt="Quality Excellence"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container-fluid py-5" style={{ background: '#f8f9fa' }}>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card border-0 shadow p-4 h-100">
                <h3 className="text-primary mb-3">Our Mission</h3>
                <p>
                  To provide innovative, cost-effective, and sustainable packaging solutions that ensure the safety and
                  integrity of our clients' products across the global logistics chain.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow p-4 h-100">
                <h3 className="text-primary mb-3">Our Vision</h3>
                <p>
                  To be the world's most preferred industrial packaging partner, recognized for our commitment to
                  environmental sustainability and excellence in global export standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
