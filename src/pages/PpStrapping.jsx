import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function PpStrapping() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('autoTab')
  const carouselRef = useRef(null)

  useEffect(() => {
    const carouselEl = document.getElementById('ppHeroCarousel')
    if (!carouselEl) return
    const handler = (e) => setActiveSlide(e.to)
    carouselEl.addEventListener('slid.bs.carousel', handler)
    return () => carouselEl.removeEventListener('slid.bs.carousel', handler)
  }, [])

  const goToSlide = (index) => {
    const carouselEl = document.getElementById('ppHeroCarousel')
    if (carouselEl && window.bootstrap) {
      const carousel = window.bootstrap.Carousel.getOrCreateInstance(carouselEl)
      carousel.to(index)
    }
    setActiveSlide(index)
  }

  const images = [
    { src: '/img/pp-strapping-band-roll.webp', alt: 'PP Strapping Roll' },
    { src: '/img/pp-strapping-band-profile.webp', alt: 'PP Strapping Profile' },
    { src: '/img/pp-strapping-color-variants.webp', alt: 'PP Strapping Color Variants' },
    { src: '/img/pp-strapping-coil-core-view.webp', alt: 'PP Strapping Coil Core' },
  ]

  return (
    <>
      <SEO
        title="PP Strapping Band | Lightweight & Cost-Effective Packaging | UK, Europe & Peru export"
        description="Lightweight and durable PP strapping bands for light to medium-duty packaging. Bulk supplier for the UK, Germany, Netherlands, Poland, Italy, France, and Peru. Cost-effective and reliable."
        canonical="https://greenstrix.com/products/pp-strapping"
        keywords="PP Umreifungsband Großhandel, Polypropylene strap supplier UK, Taśma PP Polska, Reggia in PP Italia, Feuillard PP France, Fleje de PP Perú, carton sealing strap EU, bulk strapping supplier Europe"
        schemaOrg={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "PP Strapping Band",
          "description": "Cost-effective Polypropylene strapping for lightweight and medium-duty packaging.",
          "brand": { "@type": "Brand", "name": "GREENSTRIX" },
          "offers": {
            "@type": "AggregateOffer",
            "url": "https://greenstrix.com/products/pp-strapping",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "GREENSTRIX" }
          },
          "areaServed": ["UK", "DE", "NL", "PL", "IT", "FR", "PE", "IN"]
        }}
      />

      {/* HERO */}
      <section className="pp-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><span>Products</span></li>
                  <li className="breadcrumb-item active">PP Strapping Band</li>
                </ol>
              </nav>
              <div className="hero-label">
                <span className="hero-label-dot"></span>
                Cost-Effective Packaging Solution
              </div>
              <h1 className="hero-h1">Polypropylene<br /><span className="accent">(PP) Strapping Band</span></h1>
              <p className="hero-desc">PP Straps Are Designed For Light To Medium-Duty Packaging Where Flexibility, Cost Efficiency, And Consistent Performance Are Essential. Manufactured Using High-Quality Polypropylene For Excellent Elongation And Secure Load Containment.</p>
              <p className="hero-desc">Widely Preferred For Carton Sealing, Parcel Bundling, And Unitized Packaging, Especially Where High Productivity And Economical Packaging Are Required.</p>
              <div className="hero-stat-bar">
                <div className="hsb-item"><span className="hsb-val">PP</span><span className="hsb-lbl">Material</span></div>
                <div className="hsb-item"><span className="hsb-val">5–18mm</span><span className="hsb-lbl">Width Range</span></div>
                <div className="hsb-item"><span className="hsb-val">188kg</span><span className="hsb-lbl">Max Strength</span></div>
                <div className="hsb-item"><span className="hsb-val">10–25%</span><span className="hsb-lbl">Elongation</span></div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn-cta-solid"><i className="fa fa-paper-plane"></i> Get A Quote</Link>
                <a href="#ppSpecsSection" className="btn-cta-outline"><i className="fa fa-list-ul"></i> Technical Specs</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-carousel-wrap">
                <div className="hcw-corner tl"></div>
                <div className="hcw-corner tr"></div>
                <div className="hcw-corner bl"></div>
                <div className="hcw-corner br"></div>
                <div id="ppHeroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000" ref={carouselRef}>
                  <div className="hero-carousel-inner">
                    <div className="carousel-inner">
                      {images.map((img, i) => (
                        <div className={`carousel-item${i === 0 ? ' active' : ''}`} key={i}>
                          <img src={img.src} alt={img.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <a className="hero-carousel-btn prev" href="#ppHeroCarousel" role="button" data-bs-slide="prev"><i className="fa fa-chevron-left"></i></a>
                  <a className="hero-carousel-btn next" href="#ppHeroCarousel" role="button" data-bs-slide="next"><i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
              <div className="hero-thumb-row">
                {images.map((img, i) => (
                  <div className={`hero-thumb${activeSlide === i ? ' active' : ''}`} key={i} onClick={() => goToSlide(i)}>
                    <img src={img.src} alt="thumb" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="container">
          <div className="row g-0">
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">188kg</span><span className="ss-lbl">Peak Strength</span></div></div>
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">5–18mm</span><span className="ss-lbl">Width Range</span></div></div>
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">0.80mm</span><span className="ss-lbl">Max Thickness</span></div></div>
            <div className="col-6 col-lg-3"><div className="ss-item"><span className="ss-val">14+</span><span className="ss-lbl">Product Variants</span></div></div>
          </div>
        </div>
      </div>

      {/* KEY SPECS */}
      <section className="specs-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <div className="section-eyebrow">Key Specifications</div>
              <h2 className="section-h2">Product Dimensions &amp; Properties</h2>
              <div className="section-rule"></div>
              <div className="mt-4">
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-tag"></i></div><div><span className="src-lbl">Material</span><span className="src-val">Polypropylene (PP) — Virgin Grade</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-ruler-horizontal"></i></div><div><span className="src-lbl">Width Range</span><span className="src-val">5mm to 18mm (±0.06mm tolerance)</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-layer-group"></i></div><div><span className="src-lbl">Thickness Range</span><span className="src-val">0.47mm to 0.80mm (±0.06mm tolerance)</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-weight-hanging"></i></div><div><span className="src-lbl">Break Strength</span><span className="src-val">38kg to 188kg</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-expand-arrows-alt"></i></div><div><span className="src-lbl">Elongation at Break</span><span className="src-val">10% to 25%</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-palette"></i></div><div><span className="src-lbl">Standard Colors</span><span className="src-val">Transparent / White / Black (Custom Available)</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-circle-notch"></i></div><div><span className="src-lbl">Core Dimensions (ID)</span><span className="src-val">152mm, 203mm, 280mm, 405mm</span></div></div>
                <div className="spec-row-card"><div className="src-icon"><i className="fa fa-cogs"></i></div><div><span className="src-lbl">Machine Compatibility</span><span className="src-val">Manual, Semi-Automatic &amp; Fully Automatic</span></div></div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="app-dark-card mb-4">
                <h6><i className="fa fa-industry me-2"></i>Packaging Applications</h6>
                <div className="app-list-item"><span className="app-dot"></span>Carton Sealing &amp; Parcel Bundling</div>
                <div className="app-list-item"><span className="app-dot"></span>Palletized Goods Unitization</div>
                <div className="app-list-item"><span className="app-dot"></span>Paper &amp; Printing Roll Securing</div>
                <div className="app-list-item"><span className="app-dot"></span>Textile &amp; Garment Export Cartons</div>
                <div className="app-list-item"><span className="app-dot"></span>FMCG &amp; E-commerce Packaging</div>
              </div>
              <Link to="/contact" className="pdf-cta-card">
                <img src="/img/pdf (1).png" alt="PDF" />
                <div className="pdf-cta-body">
                  <strong>PP Strapping — Product Brochure</strong>
                  <span>Download Technical Datasheet (PDF)</span>
                </div>
                <div className="pdf-cta-arrow"><i className="fa fa-arrow-right"></i></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL DATA TABS */}
      <section className="data-tabs-section" id="ppSpecsSection">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Technical Data</div>
            <h2 className="section-h2">Specifications by Machine Type</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="text-center mb-4">
            <div className="tab-pill-wrap">
              <button className={`tab-pill-btn${activeTab === 'autoTab' ? ' active' : ''}`} onClick={() => setActiveTab('autoTab')}>
                <i className="fa fa-robot"></i> Fully Automatic
              </button>
              <button className={`tab-pill-btn${activeTab === 'semiTab' ? ' active' : ''}`} onClick={() => setActiveTab('semiTab')}>
                <i className="fa fa-cog"></i> Semi-Automatic
              </button>
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'autoTab' ? ' active' : ''}`}>
            <div className="specs-table-wrap">
              <div className="table-responsive">
                <table className="table table-bordered table-striped mb-0 text-center align-middle">
                  <thead className="table-dark">
                    <tr><th colSpan="5" className="py-3 text-center">Fully Auto Polypropylene Strapping</th></tr>
                    <tr className="small text-uppercase">
                      <th>Product Code</th>
                      <th>Width (mm)<br /><span className="fw-normal opacity-75">±0.06mm</span></th>
                      <th>Thickness (mm)<br /><span className="fw-normal opacity-75">±0.06mm</span></th>
                      <th>Length (m)</th>
                      <th>Break Strength (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">GS-PP 547</td><td>5</td><td>0.47</td><td>7,000</td><td>38</td></tr>
                    <tr><td className="fw-bold">GS-PP 560</td><td>5</td><td>0.60</td><td>3,000</td><td>38</td></tr>
                    <tr><td className="fw-bold">GS-PP 960</td><td>9</td><td>0.60</td><td>3,000</td><td>88</td></tr>
                    <tr><td className="fw-bold">GS-PP 1260</td><td>12</td><td>0.60</td><td>2,000</td><td>118</td></tr>
                    <tr><td className="fw-bold">GS-PP 1270</td><td>12</td><td>0.70</td><td>2,000</td><td>128</td></tr>
                    <tr><td className="fw-bold">GS-PP 1560</td><td>15</td><td>0.60</td><td>1,500</td><td>138</td></tr>
                    <tr><td className="fw-bold">GS-PP 1880</td><td>18</td><td>0.80</td><td>1,500</td><td>188</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row g-3 mt-3">
              <div className="col-md-4"><div className="p-3 bg-light rounded-3 border text-center"><small className="text-muted d-block mb-1 fw-bold">TOLERANCE</small><span className="fw-bold">Length &amp; Weight ±5%</span></div></div>
              <div className="col-md-4"><div className="p-3 bg-light rounded-3 border text-center"><small className="text-muted d-block mb-1 fw-bold">ELONGATION</small><span className="fw-bold">10% to 25%</span></div></div>
              <div className="col-md-4"><div className="p-3 bg-light rounded-3 border text-center"><small className="text-muted d-block mb-1 fw-bold">SEALING TYPE</small><span className="fw-bold">Friction Weld / Heat</span></div></div>
            </div>
          </div>

          <div className={`tab-panel${activeTab === 'semiTab' ? ' active' : ''}`}>
            <div className="specs-table-wrap">
              <div className="table-responsive">
                <table className="table table-bordered table-striped mb-0 text-center align-middle">
                  <thead className="table-dark">
                    <tr><th colSpan="5" className="py-3 text-center">Semi-Automatic Polypropylene Strapping</th></tr>
                    <tr className="small text-uppercase">
                      <th>Product Code</th>
                      <th>Width (mm)<br /><span className="fw-normal opacity-75">±0.06mm</span></th>
                      <th>Thickness (mm)<br /><span className="fw-normal opacity-75">±0.06mm</span></th>
                      <th>Length (m)</th>
                      <th>Break Strength (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="fw-bold">GS-PP 650</td><td>6</td><td>0.50</td><td>2,000</td><td>30</td></tr>
                    <tr><td className="fw-bold">GS-PP 960</td><td>9</td><td>0.60</td><td>2,000</td><td>80</td></tr>
                    <tr><td className="fw-bold">GS-PP 1260</td><td>12</td><td>0.60</td><td>2,000</td><td>110</td></tr>
                    <tr><td className="fw-bold">GS-PP 1270</td><td>12</td><td>0.70</td><td>2,000</td><td>120</td></tr>
                    <tr><td className="fw-bold">GS-PP 1560</td><td>15</td><td>0.60</td><td>1,000</td><td>140</td></tr>
                    <tr><td className="fw-bold">GS-PP 1950</td><td>19</td><td>0.50</td><td>1,000</td><td>160</td></tr>
                    <tr><td className="fw-bold">GS-PP 1980</td><td>19</td><td>0.80</td><td>1,000</td><td>190</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row g-3 mt-3">
              <div className="col-md-4"><div className="p-3 bg-light rounded-3 border text-center"><small className="text-muted d-block mb-1 fw-bold">TOLERANCE</small><span className="fw-bold">Length &amp; Weight ±5%</span></div></div>
              <div className="col-md-4"><div className="p-3 bg-light rounded-3 border text-center"><small className="text-muted d-block mb-1 fw-bold">CORE ID</small><span className="fw-bold">152 / 203 / 280 / 405mm</span></div></div>
              <div className="col-md-4"><div className="p-3 bg-light rounded-3 border text-center"><small className="text-muted d-block mb-1 fw-bold">COLORS</small><span className="fw-bold">Transparent / White / Black</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="advantage-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Why GREENSTRIX PP</div>
            <h2 className="section-h2">The GREENSTRIX PP Advantage</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa fa-compress-arrows-alt"></i></div>
                <div><h5>Exceptional Flexibility</h5><p>Conforms easily to irregular carton edges and odd-shaped parcels without splitting or losing grip, ensuring reliable containment.</p></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa fa-bolt"></i></div>
                <div><h5>Consistent Weld Strength</h5><p>Formulated for friction-weld and heat-seal machines, delivering a reliable, uniform joint on every strap application.</p></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa fa-dollar-sign"></i></div>
                <div><h5>Economic Performance</h5><p>Most cost-effective closing solution for standard shipping requirements, reducing packaging costs without compromising security.</p></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa fa-palette"></i></div>
                <div><h5>Color Customization</h5><p>Available in multiple colors (white, yellow, blue, black) for easy shipment sorting, identification, and brand recognition.</p></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa fa-robot"></i></div>
                <div><h5>Machine Compatible</h5><p>Smooth surface finish and consistent dimensions ensure minimal friction and reliable feeding in both semi and fully automatic machinery.</p></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="adv-card">
                <div className="adv-icon"><i className="fa fa-globe"></i></div>
                <div><h5>Export Ready</h5><p>Manufactured to meet global packaging standards with consistent batch quality and documentation support for international trade.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS SERVED */}
      <section className="sectors-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Global Applications</div>
            <h2 className="section-h2">Industries &amp; Sectors Served</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="sector-card">
                <div className="sector-icon-wrap"><i className="fa fa-newspaper"></i></div>
                <h5>Printing &amp; Paper</h5>
                <p>Bundling magazines, newspapers, and corrugated sheets without surface damage.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="sector-card">
                <div className="sector-icon-wrap"><i className="fa fa-tshirt"></i></div>
                <h5>Textiles</h5>
                <p>Securing fabric rolls and export garment cartons for safe global transit.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="sector-card">
                <div className="sector-icon-wrap"><i className="fa fa-shopping-cart"></i></div>
                <h5>E-Commerce</h5>
                <p>High-speed reinforcement for delivery parcels and high-volume sorting operations.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="sector-card">
                <div className="sector-icon-wrap"><i className="fa fa-apple-alt"></i></div>
                <h5>FMCG</h5>
                <p>Securing beverage crates, food cartons, and retail consumer goods for distribution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS IMAGE GRID */}
      <section className="app-grid-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-eyebrow">Real-World Use</div>
            <h2 className="section-h2">Product In Action</h2>
            <div className="section-rule center"></div>
          </div>
          <div className="row g-4">
            <div className="col-6 col-md-4"><div className="app-img-card"><img src="/img/pp-strapping-palletized-cartons.webp" alt="Palletized Cartons" /><div className="app-img-caption">Palletized Cartons</div></div></div>
            <div className="col-6 col-md-4"><div className="app-img-card"><img src="/img/pp-strapping-box-bundling.webp" alt="Box Bundling" /><div className="app-img-caption">Box Bundling</div></div></div>
            <div className="col-6 col-md-4"><div className="app-img-card"><img src="/img/pp-strapping-export-cartons.webp" alt="Export Cartons" /><div className="app-img-caption">Export Cartons</div></div></div>
            <div className="col-6 col-md-4"><div className="app-img-card"><img src="/img/pp-strapping-industrial-cartons.webp" alt="Industrial Cartons" /><div className="app-img-caption">Industrial Cartons</div></div></div>
            <div className="col-6 col-md-4"><div className="app-img-card"><img src="/img/pp-strapping-paper-rolls.webp" alt="Paper Rolls" /><div className="app-img-caption">Paper Rolls</div></div></div>
            <div className="col-6 col-md-4"><div className="app-img-card"><img src="/img/pp-strapping-textile-rolls.webp" alt="Textile Rolls" /><div className="app-img-caption">Textile Rolls</div></div></div>
          </div>
        </div>
      </section>
    </>
  )
}
