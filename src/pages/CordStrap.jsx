import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const carouselImages = [
  { src: '/img/greenstrix-cord-strap-one.webp', alt: 'Composite Cord Strap Roll' },
  { src: '/img/greenstrix-cord-strap-two.webp', alt: 'Cord Strap Application' },
  { src: '/img/greenstrix-cord-strap-three.webp', alt: 'Cord Strap Heavy Load' },
  { src: '/img/greenstrix-cord-strap-four.webp', alt: 'Cord Strap Container' },
]

export default function CordStrap() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('specs')

  useEffect(() => {
    const el = document.getElementById('cordCarousel')
    if (!el) return
    el.addEventListener('slid.bs.carousel', (e) => {
      setActiveSlide(e.to)
    })
  }, [])

  const goToSlide = (idx) => {
    setActiveSlide(idx)
    if (window.bootstrap && window.bootstrap.Carousel) {
      const c = window.bootstrap.Carousel.getOrCreateInstance(document.getElementById('cordCarousel'))
      c.to(idx)
    }
  }

  return (
    <>
      <SEO
        title="Composite Cord Strap | High-Tenacity Lashing | UK, Europe & Peru Export"
        description="High-tenacity composite cord strapping for cargo securing. Leading exporter to the UK, Germany, Netherlands, Poland, Italy, France, and Peru. Safe and weather-resistant polyester strapping."
        canonical="https://greenstrix.com/products/cord-strap"
        keywords="Komposit Umreifungsband, composite cord strap UK, Taśma poliestrowa Polska, Reggia in composito Italia, Feuillard composite France, Fleje compuesto Perú, industrial cord strap Europe, synthetic steel strapping"
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Composite Cord Strap",
          "description": "High-tenacity polyester filament strapping with polymer coating for heavy-duty cargo securing.",
          "brand": { "@type": "Brand", "name": "GREENSTRIX" },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://greenstrix.com/products/cord-strap",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "GREENSTRIX" }
          },
          "areaServed": ["UK", "DE", "NL", "PL", "IT", "FR", "PE", "IN"]
        }}
      />

      {/* Hero */}
      <section className="pet-hero">
        <div className="container px-lg-5 px-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><a href="#">Products</a></li>
                  <li className="breadcrumb-item active">Composite Cord Strap</li>
                </ol>
              </nav>
              <div className="hero-label">
                <span className="hero-label-dot"></span>
                DNV-GL Certified Cargo Securing
              </div>
              <h1 className="hero-h1">
                Composite<br />
                <span className="accent">Cord Strap</span>
              </h1>
              <p className="hero-desc">
                Composite Cord Strapping Is Engineered From High-Tenacity Polyester
                Filaments Embedded In A Polymer Coating. It Is Often Referred To As
                "Synthetic Steel" Due To Its Exceptional Strength.
              </p>
              <p className="hero-desc">
                This Strapping Solution Is Light, Flexible, And Absorbs High Impacts
                Without Breaking, Making It The Safest Choice For Securing Heavy
                Machinery, Glass, And Fragile Industrial Components.
              </p>
              <div className="hero-stat-bar">
                <div className="hsb-item"><span className="hsb-val">Polyester</span><span className="hsb-lbl">Material</span></div>
                <div className="hsb-item"><span className="hsb-val">13–32mm</span><span className="hsb-lbl">Size Range</span></div>
                <div className="hsb-item"><span className="hsb-val">2.5T</span><span className="hsb-lbl">Max Break</span></div>
                <div className="hsb-item"><span className="hsb-val">Certified</span><span className="hsb-lbl">Quality</span></div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn-cta-solid"><i className="fa fa-paper-plane"></i> Get a Quote</Link>
                <a href="#cord-specs" className="btn-cta-outline"><i className="fa fa-list-ul"></i> TechGScal Specs</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-img-panel">
                <div className="hero-carousel-wrap">
                  <div className="hcw-corner tl"></div>
                  <div className="hcw-corner tr"></div>
                  <div className="hcw-corner bl"></div>
                  <div className="hcw-corner br"></div>
                  <div className="hero-carousel-inner">
                    <div id="cordCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
                      <div className="carousel-inner">
                        {carouselImages.map((img, i) => (
                          <div key={i} className={`carousel-item${i === activeSlide ? ' active' : ''}`}>
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>
                      <a className="hero-carousel-btn prev" href="#cordCarousel" role="button" data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a className="hero-carousel-btn next" href="#cordCarousel" role="button" data-bs-slide="next">
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hero-thumb-row">
                  {carouselImages.map((img, i) => (
                    <div
                      key={i}
                      className={`hero-thumb${activeSlide === i ? ' active' : ''}`}
                      onClick={() => goToSlide(i)}
                    >
                      <img src={img.src} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="stats-strip">
        <div className="container px-lg-5 px-3">
          <div className="row g-0">
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">1500daN</span><span className="ss-lbl">System Strength</span></div></div>
            {/* <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">DNV-GL</span><span className="ss-lbl">Certified Cargo</span></div></div> */}
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Safe</span><span className="ss-lbl">No Sharp Edges</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Tension</span><span className="ss-lbl">Residual Elasticity</span></div></div>
          </div>
        </div>
      </div>

      {/* Key Specs */}
      <section className="specs-section" id="cord-specs">
        <div className="container px-lg-5 px-3">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <span className="section-eyebrow">Product Details</span>
              <h2 className="section-h2">Key Specifications</h2>
              <div className="section-rule mb-4"></div>
              {[
                { icon: 'fa-layer-group', lbl: 'Core Material', val: 'High Tenacity Polyester Yarn' },
                { icon: 'fa-tint', lbl: 'Outer Coating', val: 'Premium Polymer Encapsulation' },
                { icon: 'fa-shield-alt', lbl: 'System Security', val: 'Used with GI Wire Buckles' },
                { icon: 'fa-dumbbell', lbl: 'Break Strength', val: 'Up to 2400 Kgf (System)' },
                { icon: 'fa-temperature-low', lbl: 'Weather resistance', val: '-40°C to +80°C' },
                // { icon: 'fa-certificate', lbl: 'Certification', val: 'DNV-GL / GermaGSscher Lloyd' },
              ].map((s, i) => (
                <div className="spec-row-card" key={i}>
                  <div className="src-icon"><i className={`fa ${s.icon}`}></i></div>
                  <div><span className="src-lbl">{s.lbl}</span><span className="src-val">{s.val}</span></div>
                </div>
              ))}
            </div>
            <div className="col-lg-5">
              <div className="app-dark-card">
                <h6><i className="fa fa-info-circle me-2"></i>Why use Cord Strap?</h6>
                <div className="app-list-item"><div className="app-dot"></div><span>Safe for your employees and customers</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Cost-effective alternative to steel</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Does not damage surfaces (no rust/scratches)</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>High shock absorption capacity</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Always re-tensionable</span></div>
              </div>
              <Link to="/contact" className="pdf-cta-card">
                <i className="fa fa-file-pdf" style={{ fontSize: '2rem', color: '#e74c3c' }}></i>
                <div className="pdf-cta-body">
                  <strong>Cord Strap Datasheet</strong>
                  <span>TechGScal performance guide</span>
                </div>
                <div className="pdf-cta-arrow"><i className="fa fa-arrow-down"></i></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Data Tabs */}
      <section className="data-tabs-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Detailed Information</span>
            <h2 className="section-h2">Performance Table</h2>
            <div className="section-rule center"></div>
          </div>

          <div className="specs-table-wrap">
            <div className="table-responsive">
              <table className="table table-bordered text-center align-middle mb-0">
                <thead className="table-dark">
                  <tr className="small text-uppercase">
                    <th>Product Code</th>
                    <th>Width (mm)</th>
                    <th>Linear Break Strength (kgf)</th>
                    <th>System Strength (kgf)</th>
                    <th>Coil Length (m)</th>
                    <th>Coil Diameter (m)</th>
                    <th>Box Dimension (mm)</th>
                    <th>Coils Per Pallet</th>
                  </tr>
                </thead>

                <tbody>

                  {/* STANDARD COMPOSITE CORD STRAP */}
                  <tr className="table-secondary fw-bold">
                    <td colSpan="8">STANDARD COMPOSITE CORD STRAP</td>
                  </tr>

                  {[
                    ['GS-CS-13', '13', '200', '370', '1100', '200', '350 X 350 X 400', '90'],
                    ['GS-CS-16', '16', '300', '540', '850', '200', '370 X 370 X 400', '90'],
                    ['GS-CS-19', '19', '360', '620', '600', '200', '370 X 370 X 400', '90'],
                    ['GS-CS-25', '25', '730', '1350', '500', '200', '380 X 380 X 400', '90'],
                    ['GS-CS-32', '32', '1250', '2300', '300', '200', '380 X 380 X 400', '90'],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => <td key={j}>{cell}</td>)}
                    </tr>
                  ))}

                  {/* HEAVY DUTY */}
                  <tr className="table-secondary fw-bold">
                    <td colSpan="8">HEAVY-DUTY COMPOSITE CORD STRAP</td>
                  </tr>

                  {[
                    ['GS-CS-19', '19', '430', '790', '600', '200', '370 X 370 X 400', '90'],
                    ['GS-CS-25', '25', '900', '1660', '500', '200', '380 X 380 X 400', '90'],
                    ['GS-CS-32', '32', '1450', '2680', '300', '200', '380 X 380 X 400', '90'],
                  ].map((row, i) => (
                    <tr key={"heavy" + i}>
                      {row.map((cell, j) => <td key={j}>{cell}</td>)}
                    </tr>
                  ))}

                  {/* TWISTED */}
                  <tr className="table-secondary fw-bold">
                    <td colSpan="8">TWISTED COMPOSITE CORD STRAP</td>
                  </tr>

                  {[
                    ['GS-CS-16', '16', '300', '550', '600', '200', '370 X 370 X 400', '90'],
                    ['GS-CS-19', '19', '360', '620', '450', '200', '370 X 370 X 400', '90'],
                    ['GS-CS-25', '25', '950', '1760', '300', '200', '380 X 380 X 400', '90'],
                    ['GS-CS-32', '32', '1250', '2300', '300', '200', '380 X 380 X 400', '90'],
                    ['GS-CS-32', '32', '1400', '2590', '300', '200', '380 X 380 X 400', '90'],
                  ].map((row, i) => (
                    <tr key={"twisted" + i}>
                      {row.map((cell, j) => <td key={j}>{cell}</td>)}
                    </tr>
                  ))}

                </tbody>

              </table>
            </div>
          </div>
          <div className="specs-note-bar mt-4">
            <i className="fa fa-info-circle fa-lg"></i>
            <span><strong>Note:</strong> System strength is achieved using GREENSTRIX high-joint efficiency GI Wire Buckles.</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Synthetic Steel</span>
            <h2 className="section-h2">The Composite Advantage</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-user-shield"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>User Safety</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>No sharp edges like steel strapping, preventing injuries during tensioGSng and cutting.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new green-border">
                <div className="feat-icon-box green"><i className="fa fa-cloud-sun"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Weather Proof</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Impervious to UV radiation and all weather conditions. Will not rot, rust, or mold.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-tachometer-alt"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Impact Absorption</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Residual elasticity allows the strap to stretch and recover, absorbing shocks during transport.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TechGScal Advantage */}
      <section className="advantage-section">
        <div className="container px-lg-5 px-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="adv-img-wrap">
                <img src="/img/greenstrix-cord-strap.webp" alt="Cord Strap Lashing Application" />
                <div className="adv-img-badge">Certified Cargo Security</div>
              </div>
            </div>
            <div className="col-lg-7">
              <span className="section-eyebrow">Industrial Grade</span>
              <h2 className="section-h2 mb-2">High-Tenacity <span style={{ color: '#00aeef' }}>Lashing System</span></h2>
              <div className="section-rule mb-4"></div>
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                Our composite cord strapping systems are the preferred choice for international
                shipping due to their high breaking load and ease of use in diverse climates.
              </p>
              {[
                { num: '01', title: 'Gentle on Surfaces', desc: 'The polymer coating protects delicate fiGSshes, making it ideal for painted surfaces or sensitive machinery.' },
                { num: '02', title: 'Dynamic Load Security', desc: 'Maintains tension on loads that expand or contract due to temperature changes or settling.' },
                { num: '03', title: 'Lightweight & Portable', desc: 'Rolls are easy to handle and require miGSmal equipment, improving warehouse mobility and safety.' },
              ].map((a, i) => (
                <div className="adv-item" key={i}>
                  <div className="adv-num">{a.num}</div>
                  <div><h5>{a.title}</h5><p>{a.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
