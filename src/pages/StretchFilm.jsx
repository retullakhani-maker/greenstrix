import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const carouselImages = [
  { src: '/img/stretch-film-rolls-stack.webp', alt: 'Stretch Film Rolls Stack' },
  { src: '/img/stretch-film-pallet-wrapping.webp', alt: 'Stretch Film Pallet Wrapping' },
  { src: '/img/stretch-film-rolls-warehouse.webp', alt: 'Stretch Film Warehouse' },
  { src: '/img/stretch-film-manual-wrapping.webp', alt: 'Stretch Film Manual Wrapping' },
  { src: '/img/stretch-film-production-storage.webp', alt: 'Stretch Film Production Storage' },
]

export default function StretchFilm() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('machine')

  useEffect(() => {
    const el = document.getElementById('sfHeroCarousel')
    if (!el) return
    el.addEventListener('slid.bs.carousel', (e) => {
      setActiveSlide(e.to)
    })
  }, [])

  const goToSlide = (idx) => {
    setActiveSlide(idx)
    if (window.bootstrap && window.bootstrap.Carousel) {
      const c = window.bootstrap.Carousel.getOrCreateInstance(document.getElementById('sfHeroCarousel'))
      c.to(idx)
    }
  }

  return (
    <>
      <SEO
        title="LLDPE Stretch Film | Pallet Protection & Load Stability | UK, Europe & Peru Export"
        description="Premium LLDPE stretch films for manual and machine application. Superior stretchability and cling for the UK, Germany, Netherlands, Poland, Italy, France, and Peru. High clarity & puncture resistance."
        canonical="https://greenstrix.com/products/stretch-film"
        keywords="Stretchfolie exporter UK, LLDPE stretch film Europe, Folia stretch Polska, Film estensibile Italia, Film étirable France, Película estirable Perú, pallet wrap wholesale EU, machine grade stretch film Germany"
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "LLDPE Stretch Film",
          "description": "High-performance LLDPE stretch film for pallet protection and load stability.",
          "brand": { "@type": "Brand", "name": "GREENSTRIX" },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://greenstrix.com/products/stretch-film",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "GREENSTRIX" }
          },
          "areaServed": ["UK", "DE", "NL", "PL", "IT", "FR", "PE", "IN"]
        }}
      />

      {/* Hero */}
      <section className="sf-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><a href="#">Products</a></li>
                  <li className="breadcrumb-item active">LLDPE Stretch Film</li>
                </ol>
              </nav>
              <div className="hero-label">
                <span className="hero-label-dot"></span>
                High-Cling Load Protection Film
              </div>
              <h1 className="hero-h1">
                LLDPE<br />
                <span className="accent">Stretch Film</span>
              </h1>
              <p className="hero-desc">
                Stretch Films Are Engineered To Provide Reliable Load Stability, Excellent
                Stretchability, And Strong Cling Performance During Storage And Transportation. Manufactured
                Using High-Quality LLDPE For Tight Load Containment.
              </p>
              <p className="hero-desc">
                Widely Used For Pallet Wrapping, Carton Stabilization, And Unit Load
                Protection, Available In Hand, Machine, And Pre-Stretch Grades For Every Application.
              </p>
              <div className="hero-stat-bar">
                <div className="hsb-item"><span className="hsb-val">LLDPE</span><span className="hsb-lbl">Material</span></div>
                <div className="hsb-item"><span className="hsb-val">300%</span><span className="hsb-lbl">Max Stretch</span></div>
                <div className="hsb-item"><span className="hsb-val">8–30μ</span><span className="hsb-lbl">Thickness</span></div>
                <div className="hsb-item"><span className="hsb-val">3 Types</span><span className="hsb-lbl">Grades</span></div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn-cta-solid"><i className="fa fa-paper-plane"></i> Get A Quote</Link>
                <a href="#sfSpecsSection" className="btn-cta-outline"><i className="fa fa-list-ul"></i> Technical Specs</a>
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
                    <div id="sfHeroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
                      <div className="carousel-inner">
                        {carouselImages.map((img, i) => (
                          <div key={i} className={`carousel-item${i === activeSlide ? ' active' : ''}`}>
                            <img src={img.src} alt={img.alt} />
                          </div>
                        ))}
                      </div>
                      <a className="hero-carousel-btn prev" href="#sfHeroCarousel" role="button" data-bs-slide="prev">
                        <i className="fa fa-chevron-left"></i>
                      </a>
                      <a className="hero-carousel-btn next" href="#sfHeroCarousel" role="button" data-bs-slide="next">
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
      <div className="stats-strip sf-theme">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">300%</span><span className="ss-lbl">Max Stretch</span></div></div>
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">300–500mm</span><span className="ss-lbl">Width Range</span></div></div>
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">8–30μ</span><span className="ss-lbl">Thickness</span></div></div>
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">3 Grades</span><span className="ss-lbl">Machine / Hand / Pre-Stretch</span></div></div>
          </div>
        </div>
      </div>

      {/* Key Specs */}
      <section className="specs-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <div className="section-eyebrow">Key Specifications</div>
              <h2 className="section-h2">Product Properties &amp; Dimensions</h2>
              <div className="section-rule"></div>
              {[
                { icon: 'fa-tag', lbl: 'Material', val: '100% Virgin LLDPE' },
                { icon: 'fa-box-open', lbl: 'Film Type', val: 'Cast Stretch Film' },
                { icon: 'fa-ruler-horizontal', lbl: 'Width Range', val: '300mm to 500mm' },
                { icon: 'fa-layer-group', lbl: 'Thickness Range', val: '8 micron to 30 micron' },
                { icon: 'fa-expand-arrows-alt', lbl: 'Stretch Capability', val: 'Up to 300% (Machine Grade)' },
                { icon: 'fa-circle-notch', lbl: 'Core Size', val: '2", 3", 6" (varies by grade)' },
                { icon: 'fa-palette', lbl: 'Transparency', val: 'High Clarity — Barcode Scannable' },
                { icon: 'fa-cogs', lbl: 'Application Grades', val: 'Machine Grade / Hand Grade / Pre-Stretch' },
              ].map((s, i) => (
                <div className="spec-row-card" key={i}>
                  <div className="src-icon"><i className={`fa ${s.icon}`}></i></div>
                  <div><span className="src-lbl">{s.lbl}</span><span className="src-val">{s.val}</span></div>
                </div>
              ))}
            </div>

            <div className="col-lg-5">
              <div className="app-dark-card mb-4">
                <h6><i className="fa fa-industry me-2"></i>Packaging Applications</h6>
                <div className="app-list-item"><span className="app-dot"></span>Pallet Wrapping &amp; Load Containment</div>
                <div className="app-list-item"><span className="app-dot"></span>Carton Stabilization &amp; Bundle Wrapping</div>
                <div className="app-list-item"><span className="app-dot"></span>Warehouse &amp; Cold Storage Protection</div>
                <div className="app-list-item"><span className="app-dot"></span>Export Container &amp; Air Freight Securing</div>
                <div className="app-list-item"><span className="app-dot"></span>Industrial Coil &amp; Drum Protection</div>
              </div>
              <a href="/PDFDoc/PET strap Product PDF.pdf" className="pdf-cta-card" onClick={(e) => { e.preventDefault(); window.open(e.currentTarget.href); }} title="Download PDF Brochure">
                <img src="/img/pdf (1).png" alt="PDF" />
                <div className="pdf-cta-body">
                  <strong>Stretch Film — Product Brochure</strong>
                  <span>Download Technical Datasheet (PDF)</span>
                </div>
                <div className="pdf-cta-arrow"><i className="fa fa-arrow-right"></i></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Data Tabs */}
      <section className="data-tabs-section" id="sfSpecsSection">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Technical Data</div>
            <h2 className="section-h2">Specifications by Grade</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="text-center mb-4 sf-pills">
            <div className="tab-pill-wrap">
              <button className={`tab-pill-btn${activeTab === 'machine' ? ' active' : ''}`} onClick={() => setActiveTab('machine')}>
                <i className="fa fa-robot"></i> Machine Grade
              </button>
              <button className={`tab-pill-btn${activeTab === 'hand' ? ' active' : ''}`} onClick={() => setActiveTab('hand')}>
                <i className="fa fa-hand-paper"></i> Hand Grade
              </button>
              <button className={`tab-pill-btn${activeTab === 'pre' ? ' active' : ''}`} onClick={() => setActiveTab('pre')}>
                <i className="fa fa-bolt"></i> Pre-Stretch
              </button>
            </div>
          </div>

          {activeTab === 'machine' && (
            <div className="tab-panel active">
              <div className="specs-table-wrap">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped mb-0 text-center align-middle">
                    <thead className="table-dark">
                      <tr><th colSpan="7" className="py-3">Machine Grade — Specifications</th></tr>
                      <tr className="small text-uppercase">
                        <th>Code</th><th>Width (mm)</th><th>Thickness (μ)</th><th>Length (m)</th><th>Weight (kg)</th><th>Core Size</th><th>Stretch (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['GSM-45020', '450', '20', '800–1,000', '13–15', '3"/6"', '220–300'],
                        ['GSM-45023', '450', '23', '750–950', '13–16', '3"/6"', '220–300'],
                        ['GSM-50017', '500', '17', '1,500–1,800', '15–17', '3"/6"', '220–300'],
                        ['GSM-50020', '500', '20', '1,200–1,500', '15–17', '3"/6"', '220–300'],
                        ['GSM-50023', '500', '23', '1,000–1,200', '15–18', '3"/6"', '220–300'],
                        ['GSM-50030', '500', '30', '700–800', '15–16', '3"/6"', '220–300'],
                      ].map((row, i) => (
                        <tr key={i}><td className="fw-bold">{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td>{row[5]}</td><td>{row[6]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hand' && (
            <div className="tab-panel active">
              <div className="specs-table-wrap">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped mb-0 text-center align-middle">
                    <thead className="table-dark">
                      <tr><th colSpan="7" className="py-3">Hand Grade — Specifications</th></tr>
                      <tr className="small text-uppercase">
                        <th>Code</th><th>Width (mm)</th><th>Thickness (μ)</th><th>Length (m)</th><th>Weight (kg)</th><th>Core Size</th><th>Stretch (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['GSH-30020', '300', '20', '400–500', '3.5–4.5', '3"', '200–250'],
                        ['GSH-40023', '400', '23', '300–400', '4.0–5.0', '3"', '200–250'],
                        ['GSH-45020', '450', '20', '300–400', '4.0–5.0', '3"', '200–250'],
                        ['GSH-50023', '500', '23', '250–270', '2.7–3.0', '3"', '200–250'],
                        ['GSH-50025', '500', '25', '200–230', '3.0–3.5', '3"', '200–250'],
                      ].map((row, i) => (
                        <tr key={i}><td className="fw-bold">{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td>{row[5]}</td><td>{row[6]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pre' && (
            <div className="tab-panel active">
              <div className="specs-table-wrap">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped mb-0 text-center align-middle">
                    <thead className="table-dark">
                      <tr><th colSpan="6" className="py-3">Pre-Stretched — Specifications</th></tr>
                      <tr className="small text-uppercase">
                        <th>Code</th><th>Width (mm)</th><th>Thickness (μ)</th><th>Length (m)</th><th>Weight (kg)</th><th>Core Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['GSPS-4308', '430', '8', '400–500', '2.0–2.4', '2"/3"'],
                        ['GSPS-4509', '450', '9', '350–450', '2.4–2.8', '2"/3"'],
                        ['GSPS-5008', '500', '8', '350–450', '2.5–3.0', '2"/3"'],
                      ].map((row, i) => (
                        <tr key={i}><td className="fw-bold">{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td>{row[5]}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-3 p-3 bg-light rounded-3 border text-center">
                <small><i className="fa fa-info-circle text-primary me-2"></i>All specifications are approximate and subject to manufacturing tolerances. Custom sizes available on request.</small>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Advantages */}
      <section className="advantage-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Why GREENSTRIX Film</div>
            <h2 className="section-h2">The GREENSTRIX Stretch Advantage</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-magnet', title: 'Silent Unwind & High Cling', desc: 'Engineered for low-noise application with immediate adhesion, ensuring internal film layers bond perfectly without any additional adhesive.' },
              { icon: 'fa-expand-arrows-alt', title: 'High Elongation — Up to 300%', desc: 'Maximum stretch capability provides wider coverage per roll, significantly reducing film consumption and packaging costs per pallet.' },
              { icon: 'fa-shield-virus', title: 'Superior Puncture Resistance', desc: 'LLDPE formulation protects loads from dust, moisture, and accidental damage during handling, storage, and international transit.' },
              { icon: 'fa-balance-scale', title: 'Consistent Gauge Quality', desc: 'Advanced cast extrusion technology ensures uniform thickness across the entire roll for predictable, reliable performance every time.' },
              { icon: 'fa-eye', title: 'High Clarity & Transparency', desc: 'Crystal-clear film allows for easy barcode scanning and visual product identification without removing the stretch wrap.' },
              { icon: 'fa-recycle', title: '100% Recyclable LLDPE', desc: 'A sustainable packaging choice that can be fully recycled through standard industrial plastic recovery channels, supporting circular economy goals.' },
            ].map((adv, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="adv-card">
                  <div className="adv-icon"><i className={`fa ${adv.icon}`}></i></div>
                  <div>
                    <h5>{adv.title}</h5>
                    <p>{adv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="sectors-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Global Applications</div>
            <h2 className="section-h2">Industries &amp; Sectors Served</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            {[
              { icon: 'fa-warehouse', title: 'Warehousing & Logistics', desc: 'Stabilizing inventory on racks and preparing pallets for inter-facility and export transport.' },
              { icon: 'fa-plane-departure', title: 'Air & Sea Freight', desc: 'Lightweight containment that secures cargo without adding significant weight to shipments.' },
              { icon: 'fa-flask', title: 'Chemicals & Industrial', desc: 'Protecting drums and containers from spills and environmental exposure during transport.' },
              { icon: 'fa-couch', title: 'Furniture & Retail', desc: 'Wrapping finished furniture to prevent scratches and surface damage during delivery and storage.' },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="sector-card">
                  <div className="sector-icon-wrap"><i className={`fa ${s.icon}`}></i></div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product In Action */}
      <section className="app-grid-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Real-World Use</div>
            <h2 className="section-h2">Product In Action</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            {[
              { src: '/img/stretch-film-pallet-wrapping.webp', label: 'Pallet Wrapping' },
              { src: '/img/stretch-film-carton-stabilization.webp', label: 'Carton Stabilization' },
              { src: '/img/stretch-film-industrial-coils.webp', label: 'Industrial Coils' },
              { src: '/img/stretch-film-bundle-wrapping.webp', label: 'Bundle Wrapping' },
              { src: '/img/stretch-film-warehouse-storage.webp', label: 'Warehouse Storage' },
              { src: '/img/stretch-film-export-pallet-packaging.webp', label: 'Export Pallet Packaging' },
            ].map((img, i) => (
              <div className="col-6 col-md-4" key={i}>
                <div className="app-img-card">
                  <img src={img.src} alt={img.label} />
                  <div className="app-img-caption">{img.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
