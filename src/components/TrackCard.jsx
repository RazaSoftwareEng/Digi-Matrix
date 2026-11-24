import { Link } from 'react-router-dom'
import Icon from './Icons'

export function HelpCard() {
  return (
    <Link to="/contact" className="track-card track-card--help">
      <span className="track-card__icon"><Icon name="plus" /></span>
      <h3>Not sure where to start?</h3>
      <p>Tell us your goals and we will recommend the right course or service for you.</p>
      <span className="track-card__link">Talk to us <Icon name="arrow" size={18} /></span>
    </Link>
  )
}

export default function TrackCard({ track }) {
  return (
    <Link to={`/courses/${track.slug}`} className="track-card" style={{ '--accent': track.color }}>
      <span className="track-card__icon"><Icon name={track.slug} /></span>
      <h3>{track.title}</h3>
      <p>{track.tagline}</p>
      <div className="track-card__meta">
        <span><Icon name="clock" size={16} /> {track.duration}</span>
        <span><Icon name="level" size={16} /> {track.level}</span>
      </div>
      <span className="track-card__link">View course <Icon name="arrow" size={18} /></span>
    </Link>
  )
}
