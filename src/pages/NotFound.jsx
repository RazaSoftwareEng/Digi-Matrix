import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function NotFound() {
  return (
    <PageHeader eyebrow="404" title="Page not found" text="The page you are looking for does not exist or has moved.">
      <div className="hero__actions">
        <Link to="/" className="btn btn--primary">Back to home</Link>
        <Link to="/courses" className="btn btn--ghost-light">Browse courses</Link>
      </div>
    </PageHeader>
  )
}
