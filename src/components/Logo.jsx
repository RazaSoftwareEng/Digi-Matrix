import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Digi Matrix home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#0B1020" />
        <g fill="#C8F55A">
          {[0, 1, 2].flatMap((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}${c}`} x={7 + c * 6.5} y={7 + r * 6.5} width="5" height="5" rx="1"
                opacity={(r + c) % 2 ? 0.45 : 1} />
            )),
          )}
        </g>
      </svg>
      <span>Digi<b>Matrix</b></span>
    </Link>
  )
}
