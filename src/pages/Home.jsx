import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GREENSTRIX",
  "image": "https://greenstrix.com/img/greenstrix-header-background.webp",
  "@id": "https://greenstrix.com/#localbusiness",
  "url": "https://greenstrix.com/",
  "telephone": "+919090603966",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "701, SNS Platina, Near Someshwara Enclave, Vesu",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "395007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1415,
    "longitude": 72.7758
  },
  "sameAs": ["https://www.linkedin.com/company/greenstrix/"],
  "areaServed": [
    {"@type": "Country", "name": "United Kingdom"},
    {"@type": "Country", "name": "Germany"},
    {"@type": "Country", "name": "Netherlands"},
    {"@type": "Country", "name": "Poland"},
    {"@type": "Country", "name": "Italy"},
    {"@type": "Country", "name": "France"},
    {"@type": "Country", "name": "Peru"},
    {"@type": "Country", "name": "India"}
  ]
}

export default function Home() {
  return (
    <>
      <SEO
        title="GREENSTRIX | Global Exporter of PET & PP Strapping, Stretch Film | UK, Europe & Peru"
        description="GREENSTRIX: A premier global exporter of high-performance PET/PP strapping and stretch film. Serving the UK, Germany, Netherlands, Poland, Italy, France, and Peru with EU-compliant industrial packaging solutions. Get a quote today!"
        canonical="https://greenstrix.com/"
        keywords="packaging material supplier europe, industrial packaging materials germany, pet strapping band manufacturer, pp strap supplier, stretch film exporter, eco friendly packaging materials, export packaging solutions, packaging materials UK export, Verpackungsmaterial Export Deutschland, Verpakkingsmaterialen export Nederland, Materiały opakowaniowe eksport Polska, Materiali da imballaggio export Italia, Matériaux d'emballage export France, Materiales de embalaje exportación Perú, industrial strapping exporter, pallet securing solutions global"
        ogImage="https://greenstrix.com/img/greenstrix-header-background.webp"
        schemaOrg={schemaOrg}
      />

      {/* Hero Carousel */}
      <div id="home" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ backgroundImage: "url('/img/greenstrix-homepage-new.webp')" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center carousel-caption">
                  <h5 className="animate__animated animate__fadeInDown">Welcome to GREENSTRIX</h5>
                  <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">
                    Reliable Packaging Solutions For Global Markets
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Global Exporter Of PET Strap, PP Strap, Stretch Film, Shrink Roll, GI Wire Buckle, And Composite Cord
                    Strap. We Supply High-Quality Packaging Materials Sourced From Certified Manufacturing Partners,
                    Suitable For Industrial, Commercial, Logistics, And Everyday Packaging Applications.
                  </p>
                  <Link to="/products/pet-strapping" className="btn btn-brand py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">
                    Our Products
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animate__animated animate__slideInRight">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{ backgroundImage: "url('/img/greenstrix-industrial-packaging-hero-banner.webp')" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center carousel-caption">
                  <h5 className="animate__animated animate__fadeInDown">Global Export Quality</h5>
                  <h1 className="display-1 text-white mb-md-4 animate__animated animate__zoomIn">
                    Strong, Safe &amp; Sustainable
                  </h1>
                  <p className="fs-5 text-white mb-4 pb-2">
                    Exported WorldWide / Quality-Checked Supply / Reliable Logistics.
                  </p>
                  <Link to="/products/pet-strapping" className="btn btn-brand py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">
                    Our Products
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animate__animated animate__slideInRight">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#home" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#home" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Feature Boxes */}
      <div className="container feature-box-container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="feature-box text-center">
              <div className="feature-box-inner">
                <div className="icon-box"><i className="fa fa-globe"></i></div>
                <h4>Global Supply</h4>
                <p>
                  We Manage Reliable International Supply Of PET Strap, PP Strap, Stretch Film, Shrink Roll, GI Wire Buckle, and Composite Cord Strap Through a
                  Structured Sourcing Network, Ensuring Continuity, Scalability, And On-Time Delivery Across Global
                  Markets
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box text-center">
              <div className="feature-box-inner">
                <div className="icon-box"><i className="fa fa-leaf"></i></div>
                <h4>Sustainability</h4>
                <p>
                  Our Sustainability Approach Focuses On Recyclable Materials, Responsible Sourcing, And Alignment
                  With Global Environmental Regulations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-box text-center">
              <div className="feature-box-inner">
                <div className="icon-box"><i className="fa fa-certificate"></i></div>
                <h4>Premium Assured Quality</h4>
                <p>
                  Our Products Align With International Quality And Compliance Expectations, Supported By Transparent
                  Documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About & Vision Section */}
      <div id="about" className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="about-img accent-blue">
                <img src="/img/about-greenstrix-packaging-manufacturer.webp" alt="Greenstrix Vision" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <h5>About Us</h5>
                <h1>Sustainable Packaging Vision Of GREENSTRIX</h1>
              </div>
              <p className="mb-4">
                GREENSTRIX is an India-based global exporter of high-performance industrial packaging materials, including <b>PET Straps, PP Straps, LLDPE Stretch Films, Shrink Rolls, GI Wire Buckles, and Composite Cord Straps</b>. We deliver durable, reliable, and sustainable packaging solutions trusted by manufacturers, exporters, and logistics companies worldwide.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="vision-item">
                    <i className="fa fa-check-circle"></i>
                    <span>Recyclable Materials</span>
                  </div>
                  <div className="vision-item">
                    <i className="fa fa-check-circle"></i>
                    <span>Circular Economy</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="vision-item">
                    <i className="fa fa-check-circle"></i>
                    <span>R&amp;D Investment</span>
                  </div>
                  <div className="vision-item">
                    <i className="fa fa-check-circle"></i>
                    <span>Reduced Environmental Impact</span>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-brand mt-4">Read More</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Summary Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h5 className="text-primary fw-bold text-uppercase ls-2">Our Services</h5>
            <h1 className="fw-bold display-5">Comprehensive Export Solutions</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
              From technical consultation to global logistics, we provide end-to-end support for your packaging
              requirements.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="service-summary-card p-4 text-center border rounded-4 h-100 shadow-sm hvr-float">
                <i className="fa fa-handshake fa-3x text-primary mb-3"></i>
                <h4>Technical Consultation</h4>
                <p>Expert guidance on choosing the right strapping and film specifications for your specific load types.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-summary-card p-4 text-center border rounded-4 h-100 shadow-sm hvr-float">
                <i className="fa fa-clipboard-check fa-3x text-primary mb-3"></i>
                <h4>Quality Coordination</h4>
                <p>Rigorous monitoring of manufacturing processes to ensure every batch meets international standards.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-summary-card p-4 text-center border rounded-4 h-100 shadow-sm hvr-float">
                <i className="fa fa-truck-loading fa-3x text-primary mb-3"></i>
                <h4>Global Logistics</h4>
                <p>Seamless export execution and documentation assistance for delivery anywhere in the world.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-outline-primary px-4 py-2">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Premium Portfolio Section */}
      <section id="products" className="section-padding portfolio-premium-dark">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h5 className="text-primary fw-bold text-uppercase ls-2">Our Portfolio</h5>
            <h1 className="fw-bold display-4">Innovative Packaging Materials</h1>
            <p className="mx-auto" style={{ maxWidth: '700px' }}>
              Experience the next generation of industrial packaging. Our premium solutions are engineered for maximum
              strength, safety, and operational efficiency.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {/* PET Strapping */}
            <div className="col-lg-4 col-md-6">
              <div className="premium-card">
                <div className="premium-card-img-wrap">
                  <span className="premium-badge-float">High Strength</span>
                  <img src="/img/pet-strapping-band-roll.webp" alt="PET Strapping" loading="lazy" />
                </div>
                <div className="premium-card-body">
                  <h3>PET Strapping Band</h3>
                  <p>The ultimate steel-grade alternative for heavy-duty industrial loads, offering superior tension and safety.</p>
                  <div className="premium-spec-list">
                    <span className="spec-pill">Eco-Friendly</span>
                    <span className="spec-pill">High Tension</span>
                    <span className="spec-pill">UV Resistant</span>
                  </div>
                  <div className="premium-btn-wrap">
                    <Link to="/products/pet-strapping" className="premium-view-btn">
                      Explore Specs <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* PP Strapping */}
            <div className="col-lg-4 col-md-6">
              <div className="premium-card">
                <div className="premium-card-img-wrap">
                  <span className="premium-badge-float" style={{ background: 'var(--secondary)' }}>Versatile</span>
                  <img src="/img/pp-strapping-band-roll.webp" alt="PP Strapping" loading="lazy" />
                </div>
                <div className="premium-card-body">
                  <h3>PP Strapping Band</h3>
                  <p>Cost-effective and reliable solution for light to medium-duty applications across global logistics networks.</p>
                  <div className="premium-spec-list">
                    <span className="spec-pill">Lightweight</span>
                    <span className="spec-pill">Recyclable</span>
                    <span className="spec-pill">Manual/Auto</span>
                  </div>
                  <div className="premium-btn-wrap">
                    <Link to="/products/pp-strapping" className="premium-view-btn">
                      Explore Specs <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Stretch Film */}
            <div className="col-lg-4 col-md-6">
              <div className="premium-card">
                <div className="premium-card-img-wrap">
                  <span className="premium-badge-float" style={{ background: '#ffc107', color: '#000' }}>Elite Grade</span>
                  <img src="/img/stretch-film-production-storage.webp" alt="Stretch Film" loading="lazy" />
                </div>
                <div className="premium-card-body">
                  <h3>LLDPE Stretch Film</h3>
                  <p>High-performance multi-layer film engineered with exceptional puncture resistance and superior load-securing power.</p>
                  <div className="premium-spec-list">
                    <span className="spec-pill">Multi-Layer</span>
                    <span className="spec-pill">High Cling</span>
                    <span className="spec-pill">Silent Release</span>
                  </div>
                  <div className="premium-btn-wrap">
                    <Link to="/products/stretch-film" className="premium-view-btn">
                      Explore Specs <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Shrink Roll */}
            <div className="col-lg-4 col-md-6">
              <div className="premium-card">
                <div className="premium-card-img-wrap">
                  <span className="premium-badge-float" style={{ background: '#6a11cb', color: '#fff' }}>Premium Packaging</span>
                  <img src="/img/shrink-roll-warehouse.png" alt="Shrink Roll" loading="lazy" />
                </div>
                <div className="premium-card-body">
                  <h3>Shrink Roll</h3>
                  <p>High-quality packaging film providing excellent strength, clarity, and protection across multiple industries.</p>
                  <div className="premium-spec-list">
                    <span className="spec-pill">High Clarity</span>
                    <span className="spec-pill">Dust Proof</span>
                    <span className="spec-pill">LDPE</span>
                  </div>
                  <div className="premium-btn-wrap">
                    <Link to="/products/shrink-roll" className="premium-view-btn">
                      Explore Specs <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* GI Wire Buckle */}
            <div className="col-lg-4 col-md-6">
              <div className="premium-card">
                <div className="premium-card-img-wrap">
                  <span className="premium-badge-float" style={{ background: '#2c3e50', color: '#fff' }}>Hardware</span>
                  <img src="/img/greenstrix-wire-buckle-one.webp" alt="GI Wire Buckle" loading="lazy" />
                </div>
                <div className="premium-card-body">
                  <h3>GI Wire Buckle</h3>
                  <p>Premium galvanized iron buckles designed for maximum joint efficiency with cord and woven strapping.</p>
                  <div className="premium-spec-list">
                    <span className="spec-pill">Galvanized</span>
                    <span className="spec-pill">Anti-Rust</span>
                    <span className="spec-pill">Batch Tested</span>
                  </div>
                  <div className="premium-btn-wrap">
                    <Link to="/products/gi-wire-buckle" className="premium-view-btn">
                      Explore Specs <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Composite Cord Strap */}
            <div className="col-lg-4 col-md-6">
              <div className="premium-card">
                <div className="premium-card-img-wrap">
                  <span className="premium-badge-float" style={{ background: '#27ae60', color: '#fff' }}>Synthetic Steel</span>
                  <img src="/img/greenstrix-cord-strap-one.webp" alt="Composite Cord Strap" loading="lazy" />
                </div>
                <div className="premium-card-body">
                  <h3>Composite Cord Strap</h3>
                  <p>High-tenacity polyester strapping providing exceptional strength and safety for heavy-duty cargo.</p>
                  <div className="premium-spec-list">
                    <span className="spec-pill">High Tenacity</span>
                    <span className="spec-pill">DNV Certified</span>
                    <span className="spec-pill">Weather Proof</span>
                  </div>
                  <div className="premium-btn-wrap">
                    <Link to="/products/cord-strap" className="premium-view-btn">
                      Explore Specs <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process Section */}
      <section className="section-padding bg-light process-section">
        <div className="container">
          <h2>Our Export Process In 4 Easy Steps</h2>
          <p className="subtitle">From Inquiry to International Delivery, Our Seamless Export Process.</p>
          <div className="process-steps">
            <div className="step">
              <div className="step-circle">
                <span className="step-number">01</span>
                <img src="/img/export-inquiry-process.webp" alt="Inquiry" style={{ height: 'auto', width: 'auto', borderRadius: 'inherit' }} />
              </div>
              <h4>Inquiry</h4>
              <p>Receive Initial Export Inquiry</p>
            </div>
            <div className="arrow">&#10142;</div>
            <div className="step">
              <div className="step-circle">
                <span className="step-number">02</span>
                <img src="/img/export-quote-consultation.webp" alt="Quote" style={{ height: 'auto', width: 'auto', borderRadius: 'inherit' }} />
              </div>
              <h4>Quote &amp; Consultation</h4>
              <p>Provide Shipping Quote &amp; Expert Consultation</p>
            </div>
            <div className="arrow">&#10142;</div>
            <div className="step">
              <div className="step-circle">
                <span className="step-number">03</span>
                <img src="/img/production-and-container-loading.webp" alt="Loading" style={{ height: 'auto', width: 'auto', borderRadius: 'inherit' }} />
              </div>
              <h4>Production &amp; Loading</h4>
              <p>Prepare Goods And Load Onto Shipping Container</p>
            </div>
            <div className="arrow">&#10142;</div>
            <div className="step">
              <div className="step-circle">
                <span className="step-number">04</span>
                <img src="/img/international-export-delivery.webp" alt="Delivery" style={{ height: 'auto', width: 'auto', borderRadius: 'inherit' }} />
              </div>
              <h4>International Delivery</h4>
              <p>Ship And Deliver To Customer's Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div id="why-us" className="section-padding choose-bg">
        <div className="container">
          <div className="section-title text-center">
            <h5 className="text-light">Why Choose Us</h5>
            <h1 className="text-white">Partner With GREENSTRIX</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <i className="fa fa-cogs"></i>
                <h4 className="text-white">Customization</h4>
                <p className="text-white-50">
                  Tailored Packaging Solutions Including Strap Dimensions, Colors, And Branding Options To Match Your
                  Specific Packaging And Logistics Requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <i className="fa fa-tags"></i>
                <h4 className="text-white">Competitive Pricing</h4>
                <p className="text-white-50">
                  Fair And Competitive Pricing Supported By Efficient Manufacturing And Flexible Commercial Terms Based
                  On Customer Requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <i className="fa fa-shield-alt"></i>
                <h4 className="text-white">Quality Assurance</h4>
                <p className="text-white-50">
                  Products Manufactured Under Controlled Production And Quality Monitoring Systems, With The Capability
                  To Support Third-Party Testing And Certifications.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <i className="fa fa-users"></i>
                <h4 className="text-white">Dedicated Support</h4>
                <p className="text-white-50">
                  Responsive Export Support With Technical Guidance, Documentation Assistance, And Proactive
                  Communication Throughout The Order Lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Process */}
      <div id="process" className="section-padding bg-white">
        <div className="container">
          <div className="section-title text-center">
            <h5>Our Excellence</h5>
            <h1>Manufacturing Process</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="process-step">
                <div className="step-number">01</div>
                <h4>Production Oversight</h4>
                <p>
                  We Work Closely With Approved Manufacturing Partners, Ensuring Defined Production Processes And
                  Specifications Are Followed To Deliver Consistent Quality And Reliable Packaging Products.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-step">
                <div className="step-number">02</div>
                <h4>Quality Control &amp; Inspection</h4>
                <p>
                  Quality is Verified Through Defined Inspection And Testing Procedures To Ensure Each Batch Meets
                  Agreed Technical And Performance Requirements Before Dispatch.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-step">
                <div className="step-number">03</div>
                <h4>Export-Ready Packaging &amp; Handling</h4>
                <p>
                  Products Are Packed Using Export-Suitable Packaging Methods To Ensure Protection During Storage,
                  Handling, And International Transit, In line With Customer And Shipment Requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h5 className="text-primary fw-bold text-uppercase">Common Queries</h5>
            <h1 className="fw-bold">Frequently Asked Questions</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion homepage-faq" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button rounded fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Are you a manufacturer or an exporter?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      GREENSTRIX is a premier international exporter specializing in high-strength plastic packaging
                      solutions. We bridge the gap between world-class manufacturing units and global industrial
                      requirements, managing everything from quality coordination to final delivery.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Which products do you export?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      We specialize in PET (Polyester) strapping, PP (Polypropylene) strapping, LLDPE stretch films,
                      High-Quality Shrink Rolls, GI Wire Buckles, and Composite Cord Strapping designed for demanding
                      load-securing and logistics applications worldwide.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Which international markets do you serve?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      We serve a global clientele, with a strong presence in European, Middle Eastern, and Indian
                      domestic markets, tailoring our export documentation and technical specifications to meet regional
                      compliance standards.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <Link to="/faq" className="btn btn-brand">Explore More FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact" className="section-padding contact-section-premium">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h5>Get In Touch</h5>
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Contact GREENSTRIX Today To Discover How Our Premium PET And PP Strapping, Stretch Film, Shrink Roll,
              Buckle, and Cord Strap Solutions Can Strengthen Your Supply Chain.
            </p>
          </div>

          <div className="contact-card-wrapper">
            <div className="row g-0">
              <div className="col-lg-5">
                <div className="contact-info-panel">
                  <h3 className="text-white mb-4">Direct Contact</h3>
                  <p className="mb-5 text-light-gray">
                    Preferred communication channels for immediate support and business inquiries.
                  </p>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-user-tie"></i></div>
                    <div className="contact-info-text">
                      <h5>Raajesh Kukadiya</h5>
                      <p>Export &amp; Business Development Executive</p>
                      <b><a href="https://wa.me/919090603966" target="_blank" rel="noopener noreferrer">(+91) 9090603966</a></b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-user-tie"></i></div>
                    <div className="contact-info-text">
                      <h5>Jaimin Patel</h5>
                      <p>Sales &amp; Partnerships Coordinator</p>
                      <b><a href="https://wa.me/4917685614141" target="_blank" rel="noopener noreferrer">(+49) 176 85614141</a></b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-envelope"></i></div>
                    <div className="contact-info-text">
                      <h5>Email Us</h5>
                      <p><a href="mailto:sales@greenstrix.com">sales@greenstrix.com</a></p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon"><i className="fa fa-map-marker-alt"></i></div>
                    <div className="contact-info-text">
                      <h5>Our Office</h5>
                      <p>701, SNS Platina Near Someshwara Enclave, Vesu, Surat-395 007</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form-panel">
                  <h3 className="fw-bold mb-4">Get A Quote</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps?q=701,%20SNS%20Platina,%20Near%20Someshwara%20Enclave,%20Vesu,%20Surat,%20Gujarat%20395007&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                allowFullScreen
                title="Greenstrix Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
