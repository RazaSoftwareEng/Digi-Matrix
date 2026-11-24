import { useEffect, useState } from 'react'
import { logoConcepts, brandPalette } from '../data/logos'
import './Logos.css'

const src = (id, dark) => `/brand/logos/${id}${dark ? '-dark-bg' : ''}.svg`
const STORAGE_KEY = 'dm-logo-shortlist'

function Wordmark({ style, dark, size = 34 }) {
  const cls = `lg-wm ${dark ? 'is-dark' : ''}`
  const gold = dark ? 'lg-gold-d' : 'lg-gold-l'
  if (style === 'caps')
    return <div className={cls} style={{ fontSize: size * 0.72, letterSpacing: '.2em', fontWeight: 700 }}>DIGI <span className={gold}>MATRIX</span></div>
  if (style === 'lower')
    return <div className={cls} style={{ fontSize: size, letterSpacing: '-.03em', fontWeight: 700 }}>digi<span className={gold}>matrix</span></div>
  return (
    <div className={cls} style={{ fontSize: size, letterSpacing: '-.02em' }}>
      <span style={{ fontWeight: 500 }}>Digi</span> <span className={gold} style={{ fontWeight: 700 }}>Matrix</span>
    </div>
  )
}

function LogoCard({ logo, index, picked, onToggle }) {
  const dark = logo.bg === 'navy'
  const num = String(index + 1).padStart(2, '0')
  return (
    <article className={`lg-card ${picked ? 'is-picked' : ''}`}>
      <div className={`lg-hero lg-hero--${logo.bg}`}>
        <span className="lg-num">{num}</span>
        <img src={src(logo.id, dark)} width="132" height="132" alt={`${logo.name} logo mark`} />
        <Wordmark style={logo.word} dark={dark} />
        <div className="lg-tag">LEARN · SELL · GROW</div>
      </div>

      <div className="lg-row">
        <figure>
          <div className="lg-tile lg-tile--app"><img src={src(logo.id, true)} width="44" height="44" alt="" /></div>
          <figcaption>App icon</figcaption>
        </figure>
        <figure className="lg-grow">
          <div className={`lg-tile lg-tile--inv ${dark ? 'is-light' : 'is-dark'}`}>
            <img src={src(logo.id, !dark)} width="34" height="34" alt="" />
            <Wordmark style={logo.word} dark={!dark} size={19} />
          </div>
          <figcaption>{dark ? 'On light' : 'On dark'}</figcaption>
        </figure>
        <figure>
          <div className="lg-tile lg-tile--fav"><img src={src(logo.id, false)} width="22" height="22" alt="" /></div>
          <figcaption>Favicon</figcaption>
        </figure>
      </div>

      <div className="lg-meta">
        <div>
          <h3>{num} · {logo.name}</h3>
          <p>{logo.note}</p>
        </div>
        <button type="button" className={`lg-pick ${picked ? 'is-on' : ''}`} onClick={onToggle} aria-pressed={picked}>
          {picked ? '★ Shortlisted' : '☆ Shortlist'}
        </button>
      </div>
      <div className="lg-downloads">
        <a href={src(logo.id, false)} download>Download SVG (light)</a>
        <a href={src(logo.id, true)} download>Download SVG (dark)</a>
      </div>
    </article>
  )
}

export default function Logos() {
  const [picked, setPicked] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [] } catch { return [] }
  })
  const [onlyPicked, setOnlyPicked] = useState(false)

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(picked)) }, [picked])
  useEffect(() => { document.title = 'Logo Concepts — Digi Matrix' }, [])

  const toggle = (id) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  const list = logoConcepts
    .map((l, i) => ({ ...l, index: i }))
    .filter((l) => !onlyPicked || picked.includes(l.id))

  return (
    <div className="lg-page">
      <section className="lg-header">
        <div className="container">
          <span className="lg-eyebrow">Brand identity · Logo exploration</span>
          <h1>Digi Matrix <span>Logo Concepts</span></h1>
          <p>
            {logoConcepts.length} directions for an e-commerce, digital marketing and AI academy. Every concept shows the main
            logo, an app icon, a version on the opposite background, and a favicon, so you can judge how it works at every size.
          </p>
          <div className="lg-palette">
            {brandPalette.map((c) => (
              <div className="lg-sw" key={c.hex}>
                <i style={{ background: c.swatch }} />
                <div><b>{c.name}</b><small>{c.hex}</small></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container lg-toolbar">
        <p>Shortlist your favourites with the ★ button. Your picks are saved in this browser.</p>
        <div className="lg-toolbar__actions">
          <span className="lg-count">{picked.length} shortlisted</span>
          <button type="button" className="lg-filter" onClick={() => setOnlyPicked((v) => !v)} aria-pressed={onlyPicked} disabled={!picked.length && !onlyPicked}>
            {onlyPicked ? `Show all ${logoConcepts.length}` : 'Show shortlist only'}
          </button>
        </div>
      </section>

      <section className="container lg-grid">
        {list.map((l) => (
          <LogoCard key={l.id} logo={l} index={l.index} picked={picked.includes(l.id)} onToggle={() => toggle(l.id)} />
        ))}
      </section>
    </div>
  )
}
