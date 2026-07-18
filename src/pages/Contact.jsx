import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Lottie from '../components/SafeLottie'
import useLottieUrl from '../hooks/useLottieUrl'
import { supabase, isSupabaseConfigured } from '../supabaseClient'
import ScrollReveal from '../components/ScrollReveal'

const LOTTIE_CONTACT_URL = 'https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const isEmailJSConfigured = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)

export default function Contact() {
  const contactAnimation = useLottieUrl(LOTTIE_CONTACT_URL)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'error' | 'success' | 'submitting' | 'missing-env'
  const [sentName, setSentName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function sendEmailNotification(formData) {
    if (!isEmailJSConfigured) return
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          message:      formData.message,
          to_email:     'klydejosephy@gmail.com',
          reply_to:     formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )
    } catch (emailErr) {
      console.warn('EmailJS notification failed:', emailErr)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMessage('')

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields before sending.')
      return
    }

    if (!isSupabaseConfigured) {
      setSentName(form.name.split(' ')[0])
      setStatus('missing-env')
      setForm({ name: '', email: '', message: '' })
      return
    }

    setStatus('submitting')

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          { 
            name: form.name, 
            email: form.email, 
            message: form.message 
          }
        ])

      if (error) {
        throw error
      }

      await sendEmailNotification(form)

      setSentName(form.name.split(' ')[0])
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Error inserting message:', err)
      setStatus('error')
      setErrorMessage(err.message || 'Failed to send message via Supabase.')
    }
  }

  return (
    <div className="page-wrap">
      <div className="contact-grid">
        <ScrollReveal direction="right" duration={600}>
          <div>
            {contactAnimation && (
              <div className="contact-lottie">
                <Lottie animationData={contactAnimation} loop autoplay />
              </div>
            )}

            <div className="contact-card-modern glass">
              <h2 className="contact-header">Let's Connect</h2>
              <p className="contact-lead">
                Whether you have a question about <b>automation workflows</b> or want to discuss a{' '}
                <b>full-stack partnership</b>, my inbox is always open.
              </p>
              <div className="contact-detail">📍 <span>Malaybalay City, Bukidnon, Philippines</span></div>
              <div className="contact-detail">📧 <span>klydejosephy@gmail.com</span></div>

              <div className="contact-social-grid">
                <a href="mailto:klydejosephy@gmail.com" className="contact-social-card">
                  <span className="contact-social-icon">📧</span>
                  <span className="contact-social-label">Email</span>
                </a>
                <a href="https://github.com/klaayd39" target="_blank" rel="noreferrer" className="contact-social-card">
                  <span className="contact-social-icon">💻</span>
                  <span className="contact-social-label">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/klyde-joseph-yabo-a38286373/" target="_blank" rel="noreferrer" className="contact-social-card">
                  <span className="contact-social-icon">🔗</span>
                  <span className="contact-social-label">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" duration={600} delay={100}>
          <div>
            <h3 className="contact-form-title">Send a Direct Message</h3>

            {status === 'error' && (
              <p className="form-error">{errorMessage}</p>
            )}
            {status === 'success' && (
              <p className="form-success">Successfully sent! Message stored. Talk soon, {sentName}.</p>
            )}
            {status === 'missing-env' && (
              <div className="form-success" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308', borderColor: 'rgba(234, 179, 8, 0.3)' }}>
                <p style={{ margin: 0, fontWeight: 700 }}>⚠️ Supabase Not Connected (Demo Mode)</p>
                <p style={{ margin: '5px 0 0', fontSize: '0.85rem' }}>
                  Successfully simulated! Create a <code>.env</code> file in your project root with your variables to enable real submissions.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-field-floating">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-field-floating">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="form-field-floating">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder=" "
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
                <label htmlFor="message">Your Message</label>
              </div>

              <button 
                type="submit" 
                className="submit-btn btn-primary" 
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? '⚡ Storing Message...' : '🚀 Deploy Message'}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
