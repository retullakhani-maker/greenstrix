import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Sustainability() {
  return (
    <>
      <SEO
        title="Sustainability Commitment | GREENSTRIX - Eco-Friendly Packaging EU"
        description="Environmental sustainability in packaging. Offering recycled rPET and recyclable solutions compliant with European environmental regulations and REACH standards."
        canonical="https://greenstrix.com/sustainability"
        keywords="sustainable packaging Germany, rPET strapping Europe, recyclable industrial packaging EU, REACH compliant packaging, green logistics Germany"
      />

      {/* Page Header */}
      <div
        className="container-fluid page-hero"
        style={{ backgroundImage: "url('/img/eco-friendly-packaging-production-new.webp')" }}
      >
        <div className="container">
          <div className="page-hero-content animated slideInLeft">
            <h1 className="page-hero-title">Sustainability</h1>
            <p className="page-hero-subtitle">
              Our commitment to eco-friendly production and a circular economy, protecting your goods and the planet.
            </p>
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <section id="sustainability" className="eco-section section-padding">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h5 className="fw-bold text-primary text-uppercase">Eco-Commitment</h5>
            <h1 className="mb-0">Our Sustainability Commitment</h1>
            <p className="subtitle mt-3">Dedicated to Eco-Friendly &amp; Responsible Sourcing</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="card sustainability-card h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="eco-icon-box mb-4">
                    <i className="fa fa-recycle fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Recycled PET (rPET)</h4>
                  <p className="text-muted mb-0">
                    Utilizing up to 100% post-consumer recycled resin, reducing virgin plastic throughput by
                    approximately 80% per batch.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card sustainability-card h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="eco-icon-box mb-4">
                    <i className="fa fa-sync-alt fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Circular Lifecycle</h4>
                  <p className="text-muted mb-0">
                    Our PET and PP strapping solutions are 100% recyclable, ensuring they remain within the industrial
                    value chain after use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card sustainability-card h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="eco-icon-box mb-4">
                    <i className="fa fa-leaf fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Carbon Optimization</h4>
                  <p className="text-muted mb-0">
                    Optimized logistics and lean coordination reduce Co2 emissions by streamlining the path from
                    production to global delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card sustainability-card h-100 border rounded-0 shadow-sm">
                <div className="p-4 text-center">
                  <div className="eco-icon-box mb-4">
                    <i className="fa fa-check-double fa-3x text-primary"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Material Safety</h4>
                  <p className="text-muted mb-0">
                    Full compliance with REACH and RoHS standards, ensuring no hazardous substances enter your supply
                    chain ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Circular Economy */}
          <div className="row mt-5 pt-5 align-items-center">
            <div className="col-lg-6">
              <img src="/img/greenstrix-.webp" alt="Sustainability at Greenstrix" className="img-fluid rounded-4 shadow" />
            </div>
            <div className="col-lg-6 ps-lg-5 mt-4 mt-lg-0">
              <h2 className="fw-bold">Championing a Circular Economy</h2>
              <p className="mt-4">
                At GREENSTRIX, we believe that industrial growth and environmental stewardship must go hand-in-hand.
                Our sustainability strategy is built on the principles of the circular economy: reducing virgin plastic
                consumption, maximizing second-life material usage, and ensuring all our products can be recycled after
                use.
              </p>
              <p>
                By choosing our rPET strapping solutions, our partners reduce their environmental impact without
                compromising on load safety or technical performance. We bridge the gap between heavy-duty industrial
                needs and responsible resource management.
              </p>
              <Link to="/contact" className="btn btn-brand mt-3">Join Our Eco Initiatives</Link>
            </div>
          </div>

          {/* rPET Transformation */}
          <div className="row mt-5 pt-4">
            <div className="col-12 text-center mb-5">
              <h2 className="fw-bold">The Greenstrix rPET Transformation</h2>
              <p className="text-muted">How we convert post-consumer waste into high-performance industrial strapping</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3 border text-center h-100">
                <div className="display-4 fw-bold text-primary opacity-25 mb-2">01</div>
                <h5 className="fw-bold">Post-Consumer Collection</h5>
                <p className="small text-muted mb-0">
                  Sourcing high-grade PET bottle flakes from verified recyclers to ensure material purity.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3 border text-center h-100">
                <div className="display-4 fw-bold text-primary opacity-25 mb-2">02</div>
                <h5 className="fw-bold">Advanced Purification</h5>
                <p className="small text-muted mb-0">
                  Rigorous washing and extrusion processes to remove any contaminants and restore resin quality.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3 border text-center h-100">
                <div className="display-4 fw-bold text-primary opacity-25 mb-2">03</div>
                <h5 className="fw-bold">Technical Extrusion</h5>
                <p className="small text-muted mb-0">
                  Precision engineering to achieve high tensile strength and consistent elongation properties.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="p-3 border text-center h-100">
                <div className="display-4 fw-bold text-primary opacity-25 mb-2">04</div>
                <h5 className="fw-bold">Sustainable Delivery</h5>
                <p className="small text-muted mb-0">
                  Supplying 100% recyclable strapping to global partners, completing the circular loop.
                </p>
              </div>
            </div>
          </div>

          {/* Technical ESG */}
          <div className="row mt-5 pt-4 bg-light p-4 rounded-4">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Material Efficiency &amp; Compliance</h3>
              <div className="d-flex mb-3">
                <i className="fa fa-check-circle text-primary mt-1 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">Tensile-to-Weight Optimization</h6>
                  <p className="small text-muted mb-0">
                    Achieving maximum load security with minimal material volume, reducing overall waste.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="fa fa-check-circle text-primary mt-1 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">REACH &amp; RoHS Compliance</h6>
                  <p className="small text-muted mb-0">
                    Every batch is tested for material safety, ensuring zero-hazard supply chain integration.
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="fa fa-check-circle text-primary mt-1 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-1">ISO 14001 Alignment</h6>
                  <p className="small text-muted mb-0">
                    Our coordination hubs prioritize manufacturers who adhere to rigorous environmental management
                    systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-primary text-white rounded-4 h-100">
                <h3 className="fw-bold mb-4">Calculated Impact</h3>
                <div className="mb-4">
                  <h4 className="mb-1">10,000+ Tons</h4>
                  <p className="small text-white-50">
                    Estimated plastic saved from landfills through our ecosystem partners' rPET usage annually.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="mb-1">100% Recyclable</h4>
                  <p className="small text-white-50">
                    Every core product provided by Greenstrix is designed for a second life, promoting zero-waste
                    logistics.
                  </p>
                </div>
                <div>
                  <h4 className="mb-1">Low Energy Footprint</h4>
                  <p className="small text-white-50">
                    Leveraging rPET resin reduces energy consumption by up to 60% compared to virgin plastic
                    production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
