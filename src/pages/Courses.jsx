import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import TrackCard, { HelpCard } from '../components/TrackCard'
import CtaBand from '../components/CtaBand'
import { tracks } from '../data/tracks'

const filters = [
  { id: 'all', label: 'All courses', match: () => true },
  { id: 'ecom', label: 'E-commerce', match: (t) => ['ebay', 'amazon', 'shopify'].includes(t.slug) },
  { id: 'marketing', label: 'Marketing', match: (t) => ['digital-marketing', 'meta-ads'].includes(t.slug) },
  { id: 'tech', label: 'Tech & AI', match: (t) => ['web-development', 'ai-bootcamp'].includes(t.slug) },
]

export default function Courses() {
  const [active, setActive] = useState('all')
  const filter = filters.find((f) => f.id === active)
  const list = tracks.filter(filter.match)

  return (
    <>
      <PageHeader
        eyebrow="Courses"
        title="Courses built around real results"
        text="Live, project-based training in e-commerce, marketing, web development and AI. Pick a track and start building."
      />
      <section className="section section--tight">
        <div className="container">
          <div className="chips" role="tablist" aria-label="Filter courses">
            {filters.map((f) => (
              <button key={f.id} role="tab" aria-selected={active === f.id}
                className={`chip ${active === f.id ? 'is-active' : ''}`} onClick={() => setActive(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="track-grid">
            {list.map((t) => <TrackCard key={t.slug} track={t} />)}
            {active === 'all' && <HelpCard />}
          </div>
        </div>
      </section>
      <CtaBand title="Not sure which course fits?" text="Tell us your goals and we will recommend the right track." />
    </>
  )
}
