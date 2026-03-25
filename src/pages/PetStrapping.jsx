import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const carouselImages = [
  { src: '/img/pet-strapping-band-roll.webp', alt: 'PET Strapping Roll' },
  { src: '/img/pet-strapping-machine-application.webp', alt: 'PET Strapping Machine' },
  { src: '/img/pet-strapping-texture-close-up.webp', alt: 'PET Strapping Texture' },
  { src: '/img/pet-strapping-coil-side-view.webp', alt: 'PET Strapping Coil' },
  { src: '/img/pet-strapping-band-strength.webp', alt: 'PET Strapping Strength' },
]

export default function PetStrapping() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('specs')
  const carouselRef = useRef(null)

  useEffect(() => {
    const el = document.getElementById('petCarousel')
    if (!el) return
    el.addEventListener('slid.bs.carousel', (e) => {
      setActiveSlide(e.to)
    })
  }, [])

  const goToSlide = (idx) => {
    setActiveSlide(idx)
    if (window.bootstrap && window.bootstrap.Carousel) {
      const c = window.bootstrap.Carousel.getOrCreateInstance(document.getElementById('petCarousel'))
      c.to(idx)
    }
  }

  return (
    <>
      <SEO
        title="PET Strapping Band | High-Strength Industrial Packaging | UK, Europe & Peru Export"
        description="Premium PET strapping bands for heavy-duty industrial applications. Leading exporter to the UK, Germany, Netherlands, Poland, Italy, France, and Peru. High tensile strength & weather-resistant."
        canonical="https://greenstrix.com/products/pet-strapping"
        keywords="PET Umreifungsband Hersteller, Polyester strapping supplier EU, PET strapping UK, Taśma PET Polska, Reggia in PET Italia, Feuillard PET France, Fleje de PET Perú, industrial PET strap export, high strength strapping band, high tensile PET strap"
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "PET Strapping Band",
          "description": "High-strength Polyethylene Terephthalate strapping for industrial packaging.",
          "brand": { "@type": "Brand", "name": "GREENSTRIX" },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://greenstrix.com/products/pet-strapping",
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
                  <li className="breadcrumb-item active">PET Strapping</li>
                </ol>
              </nav>
              <div className="hero-label">
                <span className="hero-label-dot"></span>
                Industrial Packaging Solution
              </div>
              <h1 className="hero-h1">
                Polyethylene Terephthalate<br />
                <span className="accent">(PET) Strapping</span>
              </h1>
              <p className="hero-desc">
                Polyester (PET) Straps Are High-Strength Solutions Designed For Secure Bundling And Load Stabilization.
                Widely Used As A Reliable Alternative To Steel Strapping, Offering Excellent Tensile Strength,
                Flexibility, And Consistent Performance.
              </p>
              <p className="hero-desc">
                Manufactured Using High-Quality Recyclable Polyester, Our PET Straps Provide Exceptional Weather
                Resistance And Dimensional Stability, Ensuring Your Goods Remain Secure Throughout International
                Transit.
              </p>
              <div className="hero-stat-bar">
                <div className="hsb-item"><span className="hsb-val">PET</span><span className="hsb-lbl">Material</span></div>
                <div className="hsb-item"><span className="hsb-val">12–32mm</span><span className="hsb-lbl">Widths</span></div>
                <div className="hsb-item"><span className="hsb-val">1400 Kgf</span><span className="hsb-lbl">Max Strength</span></div>
                <div className="hsb-item"><span className="hsb-val">8–20%</span><span className="hsb-lbl">Elongation</span></div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn-cta-solid"><i className="fa fa-paper-plane"></i> Get a Quote</Link>
                <a href="#pet-specs" className="btn-cta-outline"><i className="fa fa-list-ul"></i> Technical Specs</a>
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
                    <div id="petCarousel" className="carousel slide carousel-fade" data-bs-interval="false">
                      <div className="carousel-inner">
                        {carouselImages.map((img, i) => (
                          <div key={i} className={`carousel-item${i === activeSlide ? ' active' : ''}`}>
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>
                      <a className="hero-carousel-btn prev" href="#petCarousel" role="button" data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a className="hero-carousel-btn next" href="#petCarousel" role="button" data-bs-slide="next">
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
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">1400 Kgf</span><span className="ss-lbl">Max Break Strength</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">12–32mm</span><span className="ss-lbl">Width Range</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">0.5–1.27mm</span><span className="ss-lbl">Thickness</span></div></div>
            <div className="col-6 col-md-3"><div className="ss-item"><span className="ss-val">19 SKUs</span><span className="ss-lbl">Product Variants</span></div></div>
          </div>
        </div>
      </div>

      {/* Key Specifications */}
      <section className="specs-section" id="pet-specs">
        <div className="container px-lg-5 px-3">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <span className="section-eyebrow">Product Details</span>
              <h2 className="section-h2">Key Specifications</h2>
              <div className="section-rule mb-4"></div>
              {[
                { icon: 'fa-layer-group', lbl: 'Material', val: 'PET (Polyester)' },
                { icon: 'fa-ruler-horizontal', lbl: 'Width Range', val: '12mm – 32mm (± 0.6 mm)' },
                { icon: 'fa-arrows-alt-v', lbl: 'Thickness', val: '0.5mm – 1.27mm (± 0.07 mm)' },
                { icon: 'fa-dumbbell', lbl: 'Break Strength', val: '186 – 1400 Kgf' },
                { icon: 'fa-expand-arrows-alt', lbl: 'Elongation', val: '8% – 20%' },
                { icon: 'fa-bullseye', lbl: 'Core Inner Diameter', val: '406 mm' },
              ].map((s, i) => (
                <div className="spec-row-card" key={i}>
                  <div className="src-icon"><i className={`fa ${s.icon}`}></i></div>
                  <div><span className="src-lbl">{s.lbl}</span><span className="src-val">{s.val}</span></div>
                </div>
              ))}
            </div>
            <div className="col-lg-5">
              <div className="app-dark-card">
                <h6><i className="fa fa-cogs me-2"></i>Application Type</h6>
                <div className="app-list-item"><div className="app-dot"></div><span>Manual Strapping Tools</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Semi-Automatic Machines</span></div>
                <div className="app-list-item"><div className="app-dot"></div><span>Fully Automatic Machines</span></div>
              </div>
              <Link to="/contact" className="pdf-cta-card">
                <i className="fa fa-file-pdf" style={{ fontSize: '2rem', color: '#e74c3c' }}></i>
                <div className="pdf-cta-body">
                  <strong>Download Product Datasheet</strong>
                  <span>Full specifications &amp; product range</span>
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
            <h2 className="section-h2">Product Data</h2>
            <div className="section-rule center"></div>
            <div className="mt-4">
              <div className="tab-pill-wrap">
                <button className={`tab-pill-btn${activeTab === 'specs' ? ' active' : ''}`} onClick={() => setActiveTab('specs')}>
                  <i className="fa fa-table"></i> Technical Specifications
                </button>
                <button className={`tab-pill-btn${activeTab === 'uses' ? ' active' : ''}`} onClick={() => setActiveTab('uses')}>
                  <i className="fa fa-th-large"></i> Product Used For
                </button>
              </div>
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'specs' ? ' active' : ''}`}>
            <div className="specs-table-wrap">
              <div className="table-responsive">
                <table className="table table-bordered table-striped text-center align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th rowSpan="2">Product Code</th>
                      <th rowSpan="2">Width (mm)<br /><span className="small fw-normal">(± 0.6 MM)</span></th>
                      <th rowSpan="2">Thickness (mm)<br /><span className="small fw-normal">(± 0.07 MM)</span></th>
                      <th colSpan="2">Plain / Smooth</th>
                      <th colSpan="2">Embossed</th>
                    </tr>
                    <tr className="small text-uppercase" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <th>Length (m)</th>
                      <th>Strength (Kgf)</th>
                      <th>Length (m)</th>
                      <th>Strength (Kgf)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['GS-PET 120050','12','0.5','2565','195','2625','186'],
                      ['GS-PET 120060','12','0.6','2135','230','2190','220'],
                      ['GS-PET 120070','12','0.7','1830','270','1875','260'],
                      ['GS-PET 125050','12.50','0.5','2460','200','2520','190'],
                      ['GS-PET 125070','12.50','0.7','1760','280','1800','270'],
                      ['GS-PET 150070','15','0.7','1465','370','1500','357'],
                      ['GS-PET 150080','15','0.8','1280','420','1310','408'],
                      ['GS-PET 150090','15','0.9','1140','475','1165','460'],
                      ['GS-PET 155070','15.50','0.7','1420','380','1450','370'],
                      ['GS-PET 160060','16','0.6','1600','335','1640','325'],
                      ['GS-PET 160070','16','0.7','1375','390','1400','380'],
                      ['GS-PET 160080','16','0.8','1200','450','1230','435'],
                      ['GS-PET 160100','16','1.0','960','560','985','545'],
                      ['GS-PET 190080','19','0.8','1010','530','1035','515'],
                      ['GS-PET 190100','19','1.0','810','665','830','650'],
                      ['GS-PET 190127','19','1.27','635','850','650','820'],
                      ['GS-PET 250100','25','1.0','615','875','630','850'],
                      ['GS-PET 250127','25','1.27','485','1150','495','1100'],
                      ['GS-PET 320127','32','1.27','380','1500','387','1400'],
                    ].map(([code, w, t, pl, ps, el, es], i) => (
                      <tr key={i}><td>{code}</td><td>{w}</td><td>{t}</td><td>{pl}</td><td>{ps}</td><td>{el}</td><td>{es}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="specs-note-bar">
              <i className="fa fa-info-circle fa-lg"></i>
              <span><strong>Note:</strong> Break Strength Values May Vary Based On Strap Width, Thickness And Production Tolerance.</span>
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'uses' ? ' active' : ''}`}>
            <div className="app-img-grid">
              {[
                ['/img/pet-strapping-steel-pipes-bundling.webp', 'Steel Pipes'],
                ['/img/pet-strapping-metal-sheets-packaging.webp', 'Metal Sheets'],
                ['/img/pet-strapping-cotton-bales.webp', 'Cotton Bales'],
                ['/img/pet-strapping-carton-boxes.webp', 'Carton Boxes'],
                ['/img/pet-strapping-bricks-packaging.webp', 'Bricks & Construction'],
                ['/img/pet-strapping-palletized-goods.webp', 'Palletized Goods'],
              ].map(([src, label], i) => (
                <div className="app-img-tile" key={i}>
                  <img src={src} alt={label} />
                  <div className="app-tile-overlay">
                    <span className="app-tile-label"><i className="fa fa-circle"></i> {label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Why PET Strapping</span>
            <h2 className="section-h2">Built for Industrial Performance</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-industry"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Industrial Use</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Perfect for steel pipes, metal sheets, construction materials, and heavy machinery bundling.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new green-border">
                <div className="feat-icon-box green"><i className="fa fa-shield-alt"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>High Security</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>Maintains high tension over long periods and through temperature changes during international shipping.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feat-card-new">
                <div className="feat-icon-box cyan"><i className="fa fa-leaf"></i></div>
                <h4 className="fw-bold mb-2" style={{ color: '#091e3e' }}>Safe &amp; Sustainable</h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.93rem' }}>A rust-free, recyclable alternative that protects your product's appearance and the environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="sectors-section">
        <div className="container px-lg-5 px-3">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Global Applications</span>
            <h2 className="section-h2">Sectors Served</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            {[
              { num: '01', icon: 'fa-building', title: 'Construction', desc: 'Bricks, tiles, and timber stabilization for safe transport.' },
              { num: '02', icon: 'fa-box-open', title: 'Logistics', desc: 'Heavy palletized goods and multi-box consolidation.' },
              { num: '03', icon: 'fa-tools', title: 'Metal Industry', desc: 'Steel coils, aluminum sheets, and heavy metal components.' },
              { num: '04', icon: 'fa-layer-group', title: 'Cotton & Fiber', desc: 'High-compression baling for textile and agricultural exports.' },
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
                <img src="/img/pet-strapping-palletized-goods.webp" alt="PET Strapping Technical Advantage" />
                <div className="adv-img-badge">Engineered for Performance</div>
              </div>
            </div>
            <div className="col-lg-7">
              <span className="section-eyebrow">Why Choose Us</span>
              <h2 className="section-h2 mb-2">The GREENSTRIX <span style={{ color: '#00aeef' }}>Technical Advantage</span></h2>
              <div className="section-rule mb-4"></div>
              <p className="text-muted mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.75' }}>
                Our PET strapping is designed to outperform traditional steel and lower-grade plastics, ensuring your
                cargo remains secure throughout the entire supply chain.
              </p>
              {[
                { num: '01', title: 'Superior Elastic Recovery', desc: 'Unlike steel, our PET strap absorbs impacts without breaking and maintains its tension even if the load settles or shrinks.' },
                { num: '02', title: 'Total Product Safety', desc: 'Eliminate common steel problems like rust stains and sharp edge injuries. Our straps are easy to handle and won\'t damage your cargo.' },
                { num: '03', title: 'Operational Efficiency', desc: 'Longer coil lengths mean fewer changeovers on your production line, increasing your packing speed and reducing downtime.' },
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
