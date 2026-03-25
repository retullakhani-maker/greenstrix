import { useEffect } from 'react'

export default function TopBar() {


  useEffect(() => {
    const initTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        )
      }
    }

    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      initTranslate()
    } else {
      window.googleTranslateElementInit = initTranslate
    }
  }, [])

  return (
    <div className="topbar">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8">
            <div className="topbar-info d-flex flex-wrap justify-content-center justify-content-lg-start">
              <a href="mailto:sales@greenstrix.com">
                <i className="fa fa-envelope"></i> sales@greenstrix.com
              </a>
              <a href="tel:+919090603966">
                <i className="fa fa-phone-alt"></i> (+91) 9090603966
              </a>
              <a href="tel:+4917685614141">
                <i className="fa fa-phone-alt"></i> (+49) 176 85614141
              </a>
              <span className="text-white mx-2 d-none d-lg-inline">|</span>
              <a href="#">
                <i className="fa fa-map-marker-alt"></i> Surat, Gujarat, India
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center topbar-right">
              {/* Language Selector */}
              <div id="google_translate_element"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
