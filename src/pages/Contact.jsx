import { useState } from 'react'
import Lottie from '../components/SafeLottie'
import useLottieUrl from '../hooks/useLottieUrl'

const LOTTIE_CONTACT_URL = 'https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json'

export default function Contact() {
  const contactAnimation = useLottieUrl(LOTTIE_CONTACT_URL)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'error' | 'success'
  const [sentName, setSentName] = useState('')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    // NOTE: this is a front-end-only simulation, matching the original
    // Streamlit demo. To actually deliver messages, wire this up to a
    // service like Formspree, Resend, or EmailJS.
    setSentName(form.name.split(' ')[0])
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-grid">
      <div>
        {contactAnimation && (
          <div className="contact-lottie">
            <Lottie animationData={contactAnimation} loop autoplay />
          </div>
        )}

        <div className="contact-card-modern">
          <h2 className="contact-header">Let's Connect</h2>
          <p className="contact-lead">
            Whether you have a question about <b>automation workflows</b> or want to discuss a{' '}
            <b>full-stack partnership</b>, my inbox is always open.
          </p>
          <div className="contact-detail">📍 <span>Malaybalay City, Bukidnon, Philippines</span></div>
          <div className="contact-detail">📧 <span>klydejosephy@gmail.com</span></div>
        </div>
      </div>

      <div>
        <h3 className="contact-form-title">Send a Direct Message</h3>

        {status === 'error' && (
          <p className="form-error">Please fill in all fields before sending.</p>
        )}
        {status === 'success' && (
          <p className="form-success">Successfully sent! Talk soon, {sentName}.</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. john@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or inquiry..."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">🚀 Deploy Message</button>
        </form>
      </div>
    </div>
  )
}
