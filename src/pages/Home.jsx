import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import TrackCard, { HelpCard } from '../components/TrackCard'
import CtaBand from '../components/CtaBand'
import { tracks, stats, testimonials, faqs } from '../data/tracks'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--dark">Courses · Services · Mentorship</span>
          <h1>
            Learn the skills that <span className="hl">sell online</span>, or let us run them for you.
          </h1>
          <p className="lead">
            Digi Matrix teaches eBay, Amazon, Shopify, digital marketing, Meta Ads, web development
            and AI through live, project-based courses, and our team offers the same skills as
            done-for-you services.
          </p>
          <div className="hero__actions">
            <Link to="/courses" className="btn btn--primary btn--lg">
              Explore courses <Icon name="arrow" size={18} />
            </Link>
            <Link to="/services" className="btn btn--ghost-light btn--lg">Our services</Link>
          </div>
        </div>

        <div className="hero__matrix" aria-label="Our seven tracks">
          {tracks.map((t, i) => (
            <Link key={t.slug} to={`/courses/${t.slug}`} className="matrix-tile"
              style={{ '--accent': t.color, animationDelay: `${i * 70}ms` }}>
              <Icon name={t.slug} />
              <span>{t.name}</span>
            </Link>
          ))}
          <Link to="/contact" className="matrix-tile matrix-tile--cta" style={{ animationDelay: '490ms' }}>
            <Icon name="plus" />
            <span>Start today</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function TwoPaths() {
  return (
    <section className="section section--tint">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Two ways to work with us</span>
          <h2>Learn it yourself, or hand it to experts</h2>
        </div>
        <div className="paths">
          <div className="path-card">
            <span className="path-card__tag">For learners</span>
            <h3>Courses & bootcamps</h3>
            <p>Live classes, recorded sessions, real projects and mentor support, so you finish with skills you can use or sell.</p>
            <ul className="checklist">
              <li><Icon name="check" size={18} /> Beginner-friendly, step-by-step</li>
              <li><Icon name="check" size={18} /> Hands-on projects in every module</li>
              <li><Icon name="check" size={18} /> Certificate of completion</li>
            </ul>
            <Link to="/courses" className="btn btn--dark">See all courses</Link>
          </div>
          <div className="path-card path-card--dark">
            <span className="path-card__tag">For businesses</span>
            <h3>Done-for-you services</h3>
            <p>Our team sets up, manages and grows your stores, ads, websites and AI workflows while you focus on the business.</p>
            <ul className="checklist">
              <li><Icon name="check" size={18} /> Marketplace & store management</li>
              <li><Icon name="check" size={18} /> Ads, SEO and content</li>
              <li><Icon name="check" size={18} /> Websites and AI automation</li>
            </ul>
            <Link to="/services" className="btn btn--primary">Explore services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Steps() {
  const steps = [
    { n: '01', t: 'Pick your track', d: 'Choose the course or service that matches your goal.' },
    { n: '02', t: 'Learn by doing', d: 'Attend live sessions and build real projects with guidance.' },
    { n: '03', t: 'Get feedback', d: 'Mentors review your work and help you fix what is holding you back.' },
    { n: '04', t: 'Launch & grow', d: 'Go live with your store, campaigns or product, with continued support.' },
  ]
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">How it works</span>
          <h2>From first class to first sale</h2>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.n} className="step">
              <span className="step__n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section section--ink">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow eyebrow--dark">Student stories</span>
          <h2>What our learners say</h2>
        </div>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure key={i} className="quote">
              <blockquote>“{t.quote}”</blockquote>
              <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section">
      <div className="container faq">
        <div className="section__head section__head--left">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered</h2>
          <p>Still unsure? <Link to="/contact">Talk to our team</Link>.</p>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}
                <Icon name="plus" size={20} />
              </button>
              <div className="faq__answer"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Our tracks</span>
            <h2>Seven skills, one matrix</h2>
            <p>Each track is a full course and a professional service.</p>
          </div>
          <div className="track-grid">
            {tracks.map((t) => <TrackCard key={t.slug} track={t} />)}
            <HelpCard />
          </div>
        </div>
      </section>
      <TwoPaths />
      <Steps />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  )
}
