import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icons'
import { tracks } from '../data/tracks'

// Remount the form when the ?course= / ?service= query changes so it re-prefills.
export default function ContactPage() {
  const [params] = useSearchParams()
  return <Contact key={params.toString()} params={params} />
}

function Contact({ params }) {
  const preCourse = params.get('course')
  const preService = params.get('service')

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: preService ? 'service' : 'course',
    track: preCourse || preService || '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email.'
    if (!form.track) errs.track = 'Please choose a track.'
    setErrors(errs)
    if (Object.keys(errs).length) return
    // TODO: connect to a backend, email service or form provider.
    console.log('Contact form submission', form)
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your goals"
        text="Enroll in a course or request a service quote. We usually reply within one business day."
      />
      <section className="section section--tight">
        <div className="container contact">
          <div className="contact__info">
            <h2>Get in touch</h2>
            {/* Replace with real contact details */}
            <ul className="contact__list">
              <li><span><Icon name="mail" /></span><div><strong>Email</strong>hello@digimatrix.example</div></li>
              <li><span><Icon name="phone" /></span><div><strong>Phone / WhatsApp</strong>+00 000 0000000</div></li>
              <li><span><Icon name="pin" /></span><div><strong>Office</strong>Your street, Your city, Country</div></li>
              <li><span><Icon name="clock" /></span><div><strong>Hours</strong>Mon–Sat, 10:00–19:00</div></li>
            </ul>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="success" role="status">
                <span className="success__icon"><Icon name="check" size={32} /></span>
                <h3>Thanks, {form.name.split(' ')[0]}!</h3>
                <p>We have received your message and will get back to you at {form.email} soon.</p>
                <button className="btn btn--dark" onClick={() => { setSent(false); setForm({ ...form, message: '' }) }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={submit} noValidate>
                <div className="segmented" role="radiogroup" aria-label="I am interested in">
                  {[['course', 'Joining a course'], ['service', 'Hiring a service']].map(([v, l]) => (
                    <label key={v} className={form.interest === v ? 'is-active' : ''}>
                      <input type="radio" name="interest" value={v} checked={form.interest === v} onChange={update} />
                      {l}
                    </label>
                  ))}
                </div>
                <div className="form__row">
                  <Field label="Full name" error={errors.name}>
                    <input name="name" value={form.name} onChange={update} autoComplete="name" />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
                  </Field>
                </div>
                <div className="form__row">
                  <Field label="Phone / WhatsApp (optional)">
                    <input name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" />
                  </Field>
                  <Field label="Track" error={errors.track}>
                    <select name="track" value={form.track} onChange={update}>
                      <option value="">Choose one…</option>
                      {tracks.map((t) => <option key={t.slug} value={t.slug}>{t.name}</option>)}
                      <option value="other">Something else</option>
                    </select>
                  </Field>
                </div>
                <Field label="Message">
                  <textarea name="message" rows={5} value={form.message} onChange={update}
                    placeholder={form.interest === 'service' ? 'Tell us about your business and what you need…' : 'Tell us about your experience and goals…'} />
                </Field>
                <button type="submit" className="btn btn--primary btn--lg btn--block">
                  {form.interest === 'service' ? 'Request a quote' : 'Send enrollment request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? 'has-error' : ''}`}>
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </label>
  )
}
