import { Link } from 'react-router-dom'

export default function CtaBand({
  title = 'Ready to build your digital skills?',
  text = 'Join a course, or let our team do the work for you.',
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-band__actions">
            <Link to="/courses" className="btn btn--primary">Browse courses</Link>
            <Link to="/contact" className="btn btn--ghost-light">Hire our team</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
