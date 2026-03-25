import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    Fname: '', Lname: '', CompanyName: '', email: '', subject: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const emailBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #091e3e; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Business Inquiry</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px;">You have received a new inquiry from the <strong>GREENSTRIX</strong> website contact form.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 150px;"><strong>Sender Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${form.Fname} ${form.Lname}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${form.CompanyName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email Address:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${form.email}" style="color: #0d6efd;">${form.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Subject:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${form.subject || 'N/A'}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
              <h3 style="margin-top: 0; color: #091e3e;">Message:</h3>
              <p style="margin-bottom: 0; white-space: pre-wrap;">${form.message}</p>
            </div>
          </div>
          <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            <p style="margin: 0;">This email was automatically generated from greenstrix.com</p>
          </div>
        </div>
      `;

      const resp = await fetch('https://email.easyworksolutions.com/api/Email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: ['sales@greenstrix.com'],
          subject: `Website Inquiry: ${form.subject || 'Business Inquiry'}`,
          body: emailBody
        })
      })
      if (resp.ok) {
        setShowSuccess(true)
        setForm({ Fname: '', Lname: '', CompanyName: '', email: '', subject: '', message: '' })
      } else {
        const errData = await resp.json().catch(() => ({}));
        setError(errData.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {showSuccess && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
          onClick={() => setShowSuccess(false)}
        >
          <div
            style={{
              background: '#fff', borderRadius: '16px', padding: '48px',
              textAlign: 'center', maxWidth: '400px', width: '90%'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ fontSize: '3rem', color: '#66cc33', marginBottom: '16px' }}>
              <i className="fa fa-check-circle"></i>
            </div>
            <h3 style={{ color: '#091e3e', marginBottom: '12px' }}>Message Sent!</h3>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              Thank you for reaching out. Our team will contact you within 24 hours.
            </p>
            <button
              className="btn btn-brand"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form id="contactForm" onSubmit={handleSubmit} className="contact-form-premium" noValidate>
        <div className="row g-3">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              placeholder="First Name"
              required
              id="Fname"
              className="form-control"
              name="Fname"
              value={form.Fname}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              placeholder="Last Name"
              id="Lname"
              className="form-control"
              name="Lname"
              value={form.Lname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Company Name"
            required
            id="CompanyName"
            className="form-control"
            name="CompanyName"
            value={form.CompanyName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            required
            id="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            className="form-control"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="form-control"
            name="message"
            id="message"
            rows="5"
            placeholder="Tell us about your requirements (volume, dimensions, destination, etc.)"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {error && <div className="alert alert-danger mb-3">{error}</div>}

        <button type="submit" className="btn btn-submit-premium w-100" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
              Sending...
            </>
          ) : 'Submit Inquiry'}
        </button>
      </form>
    </>
  )
}
