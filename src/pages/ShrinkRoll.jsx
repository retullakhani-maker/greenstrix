import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const carouselImages = [
  { src: '/img/greenstrix-shrink-one.webp', alt: 'Shrink Roll Hero View' },
  { src: '/img/greenstrix-shrink-two.webp', alt: 'Shrink Roll Application' },
  { src: '/img/greenstrix-shrink.webp', alt: 'Shrink Roll Warehouse' },
  { src: '/img/greenstrix-shrink-four.webp', alt: 'Shrink Roll Warehouse' },
  { src: '/img/greenstrix-shrink-wrapper.webp', alt: 'Shrink Roll Warehouse' },
]

export default function ShrinkRoll() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('specs')

  useEffect(() => {
    const el = document.getElementById('shrinkCarousel')
    if (!el) return
    el.addEventListener('slid.bs.carousel', (e) => {
      setActiveSlide(e.to)
    })
  }, [])

  const goToSlide = (idx) => {
    setActiveSlide(idx)
    if (window.bootstrap && window.bootstrap.Carousel) {
      const c = window.bootstrap.Carousel.getOrCreateInstance(document.getElementById('shrinkCarousel'))
      c.to(idx)
    }
  }

  return (
    <>
      <SEO
        title="Shrink Roll | High-Quality LDPE Packaging Film | UK, Europe & Peru Export"
        description="Premium LDPE shrink rolls for industrial bundling. Leading exporter to the UK, Germany, Netherlands, Poland, Italy, France, and Peru. High clarity and superior tear resistance."
        canonical="https://greenstrix.com/products/shrink-roll"
        keywords="Schrumpffolie Export, LDPE shrink roll UK, Folia termokurczliwa Polska, Film termoretraibile Italia, Film rétractable France, Film termoencogible Perú, packaging film supplier EU, bulk shrink wrap"
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Industrial Shrink Roll",
          "description": "High-quality LDPE shrink rolls for industrial packaging and bundling.",
          "brand": { "@type": "Brand", "name": "GREENSTRIX" },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://greenstrix.com/products/shrink-roll",
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
                  <li className="breadcrumb-item active">Shrink Roll</li>
                </ol>
              </nav>
              <div className="hero-label">
                <span className="hero-label-dot"></span>
                Premium Packaging Solution
              </div>
              <h1 className="hero-h1">
                Industrial<br />
                <span className="accent">Shrink Roll</span>
              </h1>
              <p className="hero-desc">
                GREENSTRIX High-Quality Shrink Rolls Are Engineered For Superior Protection,
                Providing A Tight, Secure Wrap For Products Of All Shapes And Sizes.
                Our Films Offer Exceptional Clarity And Tear Resistance.
              </p>
              <p className="hero-desc">
                Manufactured Using Advanced LDPE Resins, These Rolls Are Ideal For
                Multi-Pack Bundling, Pallet Protection, And Industrial Surface Protection
                During Transit.
              </p>
              <div className="hero-stat-bar">
                <div className="hsb-item"><span className="hsb-val">LDPE</span><span className="hsb-lbl">Material</span></div>
                <div className="hsb-item"><span className="hsb-val">Custom</span><span className="hsb-lbl">Widths</span></div>
                <div className="hsb-item"><span className="hsb-val">High</span><span className="hsb-lbl">Clarity</span></div>
                <div className="hsb-item"><span className="hsb-val">Tough</span><span className="hsb-lbl">Durability</span></div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn-cta-solid"><i className="fa fa-paper-plane"></i> Get a Quote</Link>
                <a href="#shrink-specs" className="btn-cta-outline"><i className="fa fa-list-ul"></i> Technical Specs</a>
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
                    <div id="shrinkCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
                      <div className="carousel-inner">
                        {carouselImages.map((img, i) => (
                          <div key={i} className={`carousel-item${i === activeSlide ? ' active' : ''}`}>
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>
                      <a className="hero-carousel-btn prev" href="#shrinkCarousel" role="button" data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a className="hero-carousel-btn next" href="#shrinkCarousel" role="button" data-bs-slide="next">
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
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">LDPE</span><span className="ss-lbl">Material Base</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Verified</span><span className="ss-lbl">Quality Grade</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Custom</span><span className="ss-lbl">Micron Range</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">Global</span><span className="ss-lbl">Supply Ready</span></div></div>
          </div>
        </div>
      </div>

      {/* Key Specs */}
      <section className="specs-section" id="shrink-specs">
        <div className="container px-lg-5 px-3">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <span className="section-eyebrow">Technical Details</span>
              <h2 className="section-h2">Product Specifications</h2>
              <div className="section-rule mb-4"></div>
              {[
                { icon: 'fa-layer-group', lbl: 'Primary Material', val: 'Low-Density Polyethylene (LDPE)' },
                { icon: 'fa-expand-arrows-alt', lbl: 'Shrink Ratio', val: 'High Balanced Shrinkage' },
                { icon: 'fa-eye', lbl: 'Optical Property', val: 'High Clarity & Gloss' },
                { icon: 'fa-shield-alt', lbl: 'Protection Level', val: 'Superior Dust & Moisture Barrier' },
                { icon: 'fa-ruler-combined', lbl: 'Customization', val: 'Available in various widths and thicknesses' },
                { icon: 'fa-check-circle', lbl: 'Compliance', val: 'Industry Standard Quality' },
              ].map((s, i) => (
                <div className="spec-row-card" key={i}>
                  <div className="src-icon"><i className={`fa ${s.icon}`}></i></div>
                  <div><span className="src-lbl">{s.lbl}</span><span className="src-val">{s.val}</span></div>
                </div>
              ))}
            </div>
            <div className="col-lg-5">
              <div className="app-dark-card">
                <h6><i className="fa fa-cogs me-2"></i>Ideal For</h6>
                <div className="app-list-item"><div className="app-dot"></div><span>Beverage Bundling</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Food Packaging</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Industrial Parts</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Cosmetics & Personal Care</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Printed Media</span></div>
              </div>
              <Link to="/contact" className="pdf-cta-card">
                <i className="fa fa-file-pdf" style={{ fontSize: '2rem', color: '#e74c3c' }}></i>
                <div className="pdf-cta-body">
                  <strong>Product Catalog</strong>
                  <span>Full details of all variants</span>
                </div>
                <div className="pdf-cta-arrow"><i className="fa fa-arrow-down"></i></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Key Features</span>
            <h2 className="section-h2">Why Choose Our Shrink Rolls</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-shield-alt"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Superior Protection</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Shields products from moisture, dust, and tampering during storage and shipping.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new green-border">
                <div className="feat-icon-box green"><i className="fa fa-gem"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Visual Appeal</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>High-gloss finish enhances your product's shelf appearance and branding.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-check-double"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Versatile Utility</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Works perfectly with semi-automatic and fully automatic shrink tunnels.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="sectors-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Global Reach</span>
            <h2 className="section-h2">Application Areas</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            {[
              { num: '01', icon: 'fa-wine-bottle', title: 'FMCG', desc: 'Secure bundling of water bottles, juices, and canned goods.' },
              { num: '02', icon: 'fa-microchip', title: 'Electronics', desc: 'Protective wrap for sensitive hardware and consumer electronics.' },
              { num: '03', icon: 'fa-pills', title: 'Pharmaceuticals', desc: 'Tamper-evident packaging for boxes and health products.' },
              { num: '04', icon: 'fa-couch', title: 'Consumer Goods', desc: 'Surface protection for furniture, toys, and textiles.' },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="sector-card-fresh">
                  <span className="sector-bg-num">{s.num}</span>
                  <div className="sector-icon-box"><i className={`fa ${s.icon}`}></i></div>
                  <h5 className="fw-bold mb-2" style={{ color: '#091e3e' }}>{s.title}</h5>
                  <p className="small text-muted mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Advantage */}
      <section className="advantage-section">
        <div className="container px-lg-5 px-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="adv-img-wrap">
                <img src="/img/shrink-roll-warehouse.png" alt="Shrink Roll Technical Advantage" />
                <div className="adv-img-badge">Precision Engineered</div>
              </div>
            </div>
            <div className="col-lg-7">
              <span className="section-eyebrow">The GREENSTRIX Difference</span>
              <h2 className="section-h2 mb-2">Advanced <span style={{ color: '#00aeef' }}>Film Technology</span></h2>
              <div className="section-rule mb-4"></div>
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                Our shrink rolls are produced using state-of-the-art extrusion lines, ensuring
                consistent thickness and shrinkage properties that minimize wrap failures and waste.
              </p>
              {[
                { num: '01', title: 'Uniform Shrinkage', desc: 'Ensures a smooth, wrinkle-free finish on products of any shape.' },
                { num: '02', title: 'Eco-Friendly Resins', desc: 'Made with 100% recyclable materials that comply with international environmental standards.' },
                { num: '03', title: 'Optimized Yield', desc: 'High tensile strength allows for thinner films that don\'t compromise on performance, leading to lower costs per pack.' },
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
