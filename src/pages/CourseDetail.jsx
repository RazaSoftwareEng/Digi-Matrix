import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icons'
import TrackCard from '../components/TrackCard'
import NotFound from './NotFound'
import { getTrack, tracks } from '../data/tracks'

export default function CourseDetail() {
  const { slug } = useParams()
  const track = getTrack(slug)
  if (!track) return <NotFound />

  const others = tracks.filter((t) => t.slug !== slug).slice(0, 3)

  return (
    <>
      <section className="course-hero" style={{ '--accent': track.color }}>
        <div className="container course-hero__inner">
          <div>
            <Link to="/courses" className="back-link">← All courses</Link>
            <span className="course-hero__icon"><Icon name={track.slug} size={30} /></span>
            <h1>{track.title}</h1>
            <p className="lead">{track.summary}</p>
            <div className="course-hero__meta">
              <span><Icon name="clock" size={18} /> {track.duration}</span>
              <span><Icon name="level" size={18} /> {track.level}</span>
              <span><Icon name="live" size={18} /> {track.format}</span>
            </div>
          </div>
          <aside className="enroll-card">
            <h3>Join the next batch</h3>
            <p>Seats are limited so mentors can give everyone feedback.</p>
            <Link to={`/contact?course=${track.slug}`} className="btn btn--primary btn--block">Enroll now</Link>
            <Link to={`/contact?service=${track.slug}`} className="btn btn--ghost btn--block">Hire us for {track.name}</Link>
            <ul className="checklist checklist--sm">
              <li><Icon name="check" size={16} /> Live classes + recordings</li>
              <li><Icon name="check" size={16} /> Mentor support</li>
              <li><Icon name="check" size={16} /> Certificate of completion</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container course-body">
          <div>
            <h2>What you will learn</h2>
            <ol className="modules">
              {track.modules.map((m, i) => (
                <li key={m}>
                  <span className="modules__n">{String(i + 1).padStart(2, '0')}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2>By the end, you will have</h2>
            <ul className="checklist">
              {track.outcomes.map((o) => (
                <li key={o}><Icon name="check" size={18} /> {o}</li>
              ))}
            </ul>

            <div className="service-box" style={{ '--accent': track.color }}>
              <h3>Prefer to hire us?</h3>
              <p>Our {track.name} team also offers:</p>
              <ul>
                {track.services.map((s) => <li key={s}>{s}</li>)}
              </ul>
              <Link to={`/contact?service=${track.slug}`} className="text-link">
                Request a quote <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <h2>Explore other tracks</h2>
          </div>
          <div className="track-grid track-grid--3">
            {others.map((t) => <TrackCard key={t.slug} track={t} />)}
          </div>
        </div>
      </section>
    </>
  )
}
