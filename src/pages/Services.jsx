import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | GREENSTRIX - Packaging Solutions & Germany Support"
        description="Global export services for industrial packaging. Technical support for PET/PP strapping and stretch film with dedicated coordinators for Germany and Europe."
        canonical="https://greenstrix.com/services"
        keywords="packaging services Germany, Europe export logistics, strapping consultancy EU, stretch film supplier Germany, industrial packaging support"
      />

      {/* Page Header */}
      <div
        className="container-fluid page-hero"
        style={{ backgroundImage: "url('/img/international-export-delivery-new1.webp')" }}
      >
        <div className="container">
          <div className="page-hero-content animated slideInLeft">
            <h1 className="page-hero-title">Our Services</h1>
            <p className="page-hero-subtitle">
              Comprehensive packaging solutions and global logistics support, ensuring your cargo is secured from
              factory to destination.
            </p>
          </div>
        </div>
      </div>

      {/* Services Start */}
      <div className="wow fadeInUp">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 className="fw-bold text-primary text-uppercase">What We Offer</h5>
            <h1 className="mb-0">Comprehensive Packaging Solutions for Global Business</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card service-card-clean h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="icon-box-clean mb-4">
                    <i className="fa fa-ship fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Global Export Logistics</h4>
                  <p className="text-muted mb-4">
                    Multi-modal shipping, Incoterm-ready documentation, and real-time tracking for seamless
                    international delivery.
                  </p>
                  <Link to="/contact" className="text-primary fw-bold text-decoration-none">
                    Inquire Now <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card-clean h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="icon-box-clean mb-4">
                    <i className="fa fa-leaf fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Sustainable Solutions</h4>
                  <p className="text-muted mb-4">
                    LCA-aligned advisory on rPET and recyclable materials to reduce carbon footprint via high-efficiency
                    packaging.
                  </p>
                  <Link to="/contact" className="text-primary fw-bold text-decoration-none">
                    Inquire Now <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card-clean h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="icon-box-clean mb-4">
                    <i className="fa fa-microchip fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Technical Consultancy</h4>
                  <p className="text-muted mb-4">
                    Expert guidance on selecting the right strapping and film specifications for your specific high-load
                    requirements.
                  </p>
                  <Link to="/contact" className="text-primary fw-bold text-decoration-none">
                    Inquire Now <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card-clean h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="icon-box-clean mb-4">
                    <i className="fa fa-boxes fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Bulk Supply Reliability</h4>
                  <p className="text-muted mb-4">
                    Consistent availability and high-volume coordination capacity to meet even the most demanding
                    industrial needs.
                  </p>
                  <Link to="/contact" className="text-primary fw-bold text-decoration-none">
                    Inquire Now <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card-clean h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="icon-box-clean mb-4">
                    <i className="fa fa-check-circle fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Quality Assurance</h4>
                  <p className="text-muted mb-4">
                    Batch-parity oversight and tensile testing to ensure 100% reliability in extreme high-load transit
                    conditions.
                  </p>
                  <Link to="/contact" className="text-primary fw-bold text-decoration-none">
                    Inquire Now <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card service-card-clean h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="icon-box-clean mb-4">
                    <i className="fa fa-handshake fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Partner Support</h4>
                  <p className="text-muted mb-4">
                    Dedicated account management and after-sales support to ensure your packaging operations run
                    smoothly at all times.
                  </p>
                  <Link to="/contact" className="text-primary fw-bold text-decoration-none">
                    Inquire Now <i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Customization & OEM */}
          <div className="row mt-5 pt-5 gx-5 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Product Customization &amp; OEM</h2>
              <p className="text-muted">
                We provide more than just standard products; we offer tailored engineering to match your specific
                industrial requirements. Our manufacturing coordination allows for deep customization across our entire
                range.
              </p>
              <div className="row g-3 mt-2">
                <div className="col-sm-6">
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="fw-bold text-primary mb-2">
                      <i className="fa fa-palette me-2"></i>Custom Coloring
                    </h6>
                    <p className="small mb-0">
                      Full-spectrum color matching for PP and PET straps to align with your corporate branding.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="fw-bold text-primary mb-2">
                      <i className="fa fa-print me-2"></i>Private Labeling
                    </h6>
                    <p className="small mb-0">
                      Direct-on-strap printing for logos, batches, or safety instructions for OEM partners.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="fw-bold text-primary mb-2">
                      <i className="fa fa-ruler-combined me-2"></i>Bespoke Specs
                    </h6>
                    <p className="small mb-0">
                      Custom widths (5mm to 32mm) and thicknesses tailored to your heavy-duty machinery.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="fw-bold text-primary mb-2">
                      <i className="fa fa-layer-group me-2"></i>Multi-Layer Film
                    </h6>
                    <p className="small mb-0">
                      LLDPE stretch film available in various micron levels (8&mu; to 35&mu;) for hand or machine use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-4 rounded-4 border">
                <h4 className="fw-bold mb-3">Technical Performance Framework</h4>
                <p className="text-muted small mb-4">
                  Our products are tested against rigorous international benchmarks to ensure maximum load security.
                </p>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-bold small">Strap Tensile Strength</span>
                    <span className="text-primary small fw-bold">Up to 188kg (PET)</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-bold small">Film Stretch Conversion</span>
                    <span className="text-primary small fw-bold">300% Elongation</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-bold small">Impact Resistance</span>
                    <span className="text-primary small fw-bold">Shock Absorbing</span>
                  </div>
                  <div className="progress" style={{ height: '6px' }}>
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-certificate text-success me-2"></i>
                    <span className="small fw-bold">ISO 9001 &amp; 14001 Certified Facilities</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa fa-shield-alt text-success me-2"></i>
                    <span className="small fw-bold">Global Safety Standard Compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Industry Verticals */}
          <div className="row mt-5 pt-5">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold">Global Industry Verticals</h2>
              <p className="text-muted">Tailored support for high-stakes industrial sectors worldwide</p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-white border h-100 text-center sector-box">
                <i className="fa fa-industry fa-2x text-primary mb-3"></i>
                <h5 className="fw-bold">Construction &amp; Metals</h5>
                <p className="small text-muted mb-0">
                  Heavy-duty PET strapping designed for bricks, steel coils, and timber with high tension retention.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-white border h-100 text-center sector-box">
                <i className="fa fa-tshirt fa-2x text-primary mb-3"></i>
                <h5 className="fw-bold">Cotton &amp; Fiber</h5>
                <p className="small text-muted mb-0">
                  High-elasticity PP straps optimized for baling operations, ensuring stability after compression.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-white border h-100 text-center sector-box">
                <i className="fa fa-wine-glass fa-2x text-primary mb-3"></i>
                <h5 className="fw-bold">Glass &amp; Ceramics</h5>
                <p className="small text-muted mb-0">
                  Soft-stretch films and light-tension PP bands to prevent surface scratching and breakage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
