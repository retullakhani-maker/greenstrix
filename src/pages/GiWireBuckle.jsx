import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const carouselImages = [
  { src: '/img/greenstrix-wire-buckle-one.webp', alt: 'GI Wire Buckle' },
  { src: '/img/greenstrix-wire-buckle-two.webp', alt: 'GI Wire Buckle Application' },
  { src: '/img/greenstrix-wire-buckle-three.webp', alt: 'GI Wire Buckle Strapping' },
  { src: '/img/greenstrix-wire-buckle-four.webp', alt: 'GI Wire Buckle Export' },
  { src: '/img/greenstrix-wire-buckle-five.webp', alt: 'GI Wire Buckle Export' },
]

export default function GiWireBuckle() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('specs')

  useEffect(() => {
    const el = document.getElementById('buckleCarousel')
    if (!el) return
    el.addEventListener('slid.bs.carousel', (e) => {
      setActiveSlide(e.to)
    })
  }, [])

  const goToSlide = (idx) => {
    setActiveSlide(idx)
    if (window.bootstrap && window.bootstrap.Carousel) {
      const c = window.bootstrap.Carousel.getOrCreateInstance(document.getElementById('buckleCarousel'))
      c.to(idx)
    }
  }

  return (
    <>
      <SEO
        title="GI Wire Buckle | Galvanized Iron Strapping Buckles | UK, Europe & Peru Export"
        description="Galvanized iron wire buckles for heavy-duty strapping. Leading exporter to the UK, Germany, Netherlands, Poland, Italy, France, and Peru. Corrosion-resistant industrial lashing hardware."
        canonical="https://greenstrix.com/products/gi-wire-buckle"
        keywords="Drahtverschlussklemmen verzinkt, GI wire buckle UK, Zapinka druciana Polska, Fibbia in filo zincato Italia, Boucle en fil galvanisé France, Hebilla de alambre Perú, strapping buckles supplier EU, industrial lashing hardware"
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "GI Wire Buckle",
          "description": "Galvanized Iron Wire Buckles for industrial strapping and cargo lashing.",
          "brand": { "@type": "Brand", "name": "GREENSTRIX" },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://greenstrix.com/products/gi-wire-buckle",
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
                  <li className="breadcrumb-item active">GI Wire Buckle</li>
                </ol>
              </nav>
              <div className="hero-label">
                <span className="hero-label-dot"></span>
                Heavy-Duty Lashing Hardware
              </div>
              <h1 className="hero-h1">
                Galvanized Iron<br />
                <span className="accent">Wire Buckle</span>
              </h1>
              <p className="hero-desc">
                GREENSTRIX GI Wire Buckles Are Specifically Designed For Use With
                Composite Cord Straps And Woven Strapping. These Buckles Provide
                Maximum Joint Efficiency And Tension Retention.
              </p>
              <p className="hero-desc">
                Available In Sizes Ranging From 13mm To 50mm, Our Buckles Are
                Manufactured Using High-Grade Galvanized Iron To Ensure
                Superior Strength And Corrosion Resistance In Harsh Environments.
              </p>
              <div className="hero-stat-bar">
                <div className="hsb-item"><span className="hsb-val">GI</span><span className="hsb-lbl">Material</span></div>
                <div className="hsb-item"><span className="hsb-val">13–50mm</span><span className="hsb-lbl">Size Range</span></div>
                <div className="hsb-item"><span className="hsb-val">High</span><span className="hsb-lbl">Strength</span></div>
                <div className="hsb-item"><span className="hsb-val">Zinc</span><span className="hsb-lbl">Coating</span></div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn-cta-solid"><i className="fa fa-paper-plane"></i> Get a Quote</Link>
                <a href="#buckle-specs" className="btn-cta-outline"><i className="fa fa-list-ul"></i> Technical Specs</a>
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
                    <div id="buckleCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
                      <div className="carousel-inner">
                        {carouselImages.map((img, i) => (
                          <div key={i} className={`carousel-item${i === activeSlide ? ' active' : ''}`}>
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>
                      <a className="hero-carousel-btn prev" href="#buckleCarousel" role="button" data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a className="hero-carousel-btn next" href="#buckleCarousel" role="button" data-bs-slide="next">
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
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">GI</span><span className="ss-lbl">Galvanized Iron</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">13–50mm</span><span className="ss-lbl">Available Sizes</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Anti-Rust</span><span className="ss-lbl">Zinc Protected</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Verified</span><span className="ss-lbl">Batch Tested</span></div></div>
          </div>
        </div>
      </div>

      {/* Key Specs */}
      <section className="specs-section" id="buckle-specs">
        <div className="container px-lg-5 px-3">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <span className="section-eyebrow">Product Details</span>
              <h2 className="section-h2">Key Specifications</h2>
              <div className="section-rule mb-4"></div>
              {[
                { icon: 'fa-cube', lbl: 'Raw Material', val: 'Low Carbon Steel / GI' },
                { icon: 'fa-shield-alt', lbl: 'Surface Finish', val: 'Galvanized / Bright Zinc Plated' },
                { icon: 'fa-ruler-combined', lbl: 'Width Compatibility', val: 'For Strapping Width 13mm to 50mm' },
                { icon: 'fa-dumbbell', lbl: 'Joint Efficiency', val: 'Maximum Holding Power' },
                { icon: 'fa-tint-slash', lbl: 'Durability', val: 'Salt Spray Tested Anti-Corrosion' },
                { icon: 'fa-check-circle', lbl: 'Certifications', val: 'Industry Compliant Manufacturing' },
              ].map((s, i) => (
                <div className="spec-row-card" key={i}>
                  <div className="src-icon"><i className={`fa ${s.icon}`}></i></div>
                  <div><span className="src-lbl">{s.lbl}</span><span className="src-val">{s.val}</span></div>
                </div>
              ))}
            </div>
            <div className="col-lg-5">
              <div className="app-dark-card">
                <h6><i className="fa fa-link me-2"></i>Used With</h6>
                <div className="app-list-item"><div className="app-dot"></div><span>Composite Cord Strapping</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Woven Polyester Strapping</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Bailing Press Strapping</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Cargo Lashing Webbing</span></div>
              </div>
              <Link to="/contact" className="pdf-cta-card">
                <i className="fa fa-file-pdf" style={{ fontSize: '2rem', color: '#e74c3c' }}></i>
                <div className="pdf-cta-body">
                  <strong>Buckle Size Chart</strong>
                  <span>Download full PDF guide</span>
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
            <h2 className="section-h2">Size & Strength Data</h2>
            <div className="section-rule center"></div>
          </div>

          <div className="specs-table-wrap">
            <div className="table-responsive">
              <table className="table table-bordered table-striped text-center align-middle mb-0">
                <thead className="table-dark">
                  <tr className="small text-uppercase">
                    <th>PRODUCT CODE</th>
                    <th>WIDTH (MM)</th>
                    <th>THICKNESS (+- 0.05 MM)</th>
                    <th>PCS / BOX</th>
                    <th>BOX DIMENSION (mm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['GS-WB-13', '13mm', '3.20', '200', '320 X 290 X 203'],
                    ['GS-WB-16', '16mm', '3.45', '1500', '320 X 290 X 203'],
                    ['GS-WB-19', '19mm', '3.95', '1000', '320 X 290 X 203'],
                    ['GS-WB-25', '25mm', '4.95', '500', '320 X 290 X 203'],
                    ['GS-WB-32', '32mm', '6.95', '250', '320 X 290 X 203'],
                    ['GS-WB-32M', '32mm', '6.95', '250', '320 X 290 X 203'],
                    ['GS-WB-40', '40mm', '7/8', '150', '320 X 290 X 203'],

                  ].map((row, i) => (
                    <tr key={i}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="specs-note-bar mt-4">
            <i className="fa fa-info-circle fa-lg"></i>
            <span><strong>Note:</strong> Custom wire diameters and bulk packaging options are available upon request.</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Key Advantages</span>
            <h2 className="section-h2">Engineered for Load Security</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-anchor"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Non-Slip Joint</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>The wire geometry ensures the strap locks tight under tension, preventing slippage during transit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new green-border">
                <div className="feat-icon-box green"><i className="fa fa-snowflake"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Corrosion Proof</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Galvanized zinc coating prevents rust, even in humid sea-freight environments and long-term storage.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-shipping-fast"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Easy Threading</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Smooth finish and precise bends allow for fast and efficient strapping operations on the warehouse floor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advantage */}
      <section className="advantage-section">
        <div className="container px-lg-5 px-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="adv-img-wrap">
                <img src="/img/gi-wire-buckle.webp" alt="GI Wire Buckle Technical Advantage" />
                <div className="adv-img-badge">Precision Bent Wire</div>
              </div>
            </div>
            <div className="col-lg-7">
              <span className="section-eyebrow">The GREENSTRIX Standard</span>
              <h2 className="section-h2 mb-2">High Joint <span style={{ color: '#00aeef' }}>Efficiency</span></h2>
              <div className="section-rule mb-4"></div>
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                Our buckles are tested for destructive break load to match or exceed the
                strength of the straps they accompany, ensuring your cargo lashing is the
                strongest link in your supply chain.
              </p>
              {[
                { num: '01', title: 'Optimal Tension Retention', desc: 'Maintains tension even if the load settles or shifts during transport.' },
                { num: '02', title: 'Smooth Edge Profiling', desc: 'Prevents the wire from cutting into the strap material, maximizing system strength.' },
                { num: '03', title: 'Batch Traceability', desc: 'Every production batch is tested for wire hardness and plating thickness to ensure uniform quality.' },
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
