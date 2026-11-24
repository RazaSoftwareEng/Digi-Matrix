import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import PageHeader from '../components/PageHeader'
import CtaBand from '../components/CtaBand'
import { tracks } from '../data/tracks'

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Done-for-you digital services"
        text="The same experts who teach our courses can set up, manage and grow your online business."
      />
      <section className="section section--tight">
        <div className="container services">
          {tracks.map((t) => (
            <article key={t.slug} className="service-row" style={{ '--accent': t.color }}>
              <div className="service-row__head">
                <span className="track-card__icon"><Icon name={t.slug} /></span>
                <div>
                  <h2>{t.name}</h2>
                  <p>{t.tagline}</p>
                </div>
              </div>
              <ul className="service-row__list">
                {t.services.map((s) => (
                  <li key={s}><Icon name="check" size={18} /> {s}</li>
                ))}
              </ul>
              <div className="service-row__actions">
                <Link to={`/contact?service=${t.slug}`} className="btn btn--dark">Get a quote</Link>
                <Link to={`/courses/${t.slug}`} className="text-link">Learn it yourself <Icon name="arrow" size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Need a custom package?" text="Combine stores, ads, websites and AI into one plan for your business." />
    </>
  )
}
